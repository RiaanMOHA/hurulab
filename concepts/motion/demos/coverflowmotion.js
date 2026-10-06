(() => {
  const ID = "coverflow";
  const SPRING = { stiffness: 65, damping: 15, mass: 1, rest: 0.0005, restSpeed: 0.001, step: 0.002 };
  const ROTATION = 22;
  const NEIGHBOUR_SCALE = 0.82;
  const NEIGHBOUR_OPACITY = 0.45;
  const PERSPECTIVE = 1200;
  const SERVICES = [
    "Building software",
    "Automating repetitive work",
    "Websites and online presence",
    "Answers from your data",
    "Considered AI",
    "Training your team on their own work",
    "Ongoing support",
  ];
  const CHEVRON = (d) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;

  // Clamped piecewise-linear interpolation, the same as Motion's useTransform.
  function interpolate(value, input, output) {
    if (value <= input[0]) return output[0];
    const last = input.length - 1;
    if (value >= input[last]) return output[last];
    let i = 1;
    while (value > input[i]) i++;
    const t = (value - input[i - 1]) / (input[i] - input[i - 1]);
    return output[i - 1] + (output[i] - output[i - 1]) * t;
  }

  function project(offset, cw, flat) {
    const near = cw * 0.6;
    return {
      rotateY: flat ? 0 : interpolate(offset, [-near, 0, near], [ROTATION, 0, -ROTATION]),
      scale: interpolate(offset, [-near, 0, near], [NEIGHBOUR_SCALE, 1, NEIGHBOUR_SCALE]),
      x: interpolate(offset, [-cw * 2.3, -near, near, cw * 2.3], [120, 0, 0, -120]),
      opacity: interpolate(offset, [-cw * 1.2, 0, cw * 1.2], [NEIGHBOUR_OPACITY, 1, NEIGHBOUR_OPACITY]),
      zIndex: Math.max(0, Math.round(1000 - Math.abs(offset))),
    };
  }

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Coverflow carousel",
    source: "coverflowmotion.md",
    section: "services",
    where: "The What we bring section, in place of the bento of seven services on narrow screens.",
    how: "One service sits face on in the center while its neighbors turn away and fade, and the visitor pages through all seven with the arrows, the dots, the keyboard or a swipe.",
    css: `
.m-${ID} .wrap { display: flex; flex-direction: column; align-items: center; gap: 2rem; width: 100%; padding: 2rem 0; }
.m-${ID} .band { position: relative; width: 100%; outline: none; touch-action: pan-y; user-select: none; cursor: grab;
  -webkit-mask-image: linear-gradient(to right, transparent, #000 15%, #000 85%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 15%, #000 85%, transparent); }
.m-${ID} .band.dragging { cursor: grabbing; }
.m-${ID} .band:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 4px; border-radius: 1.5rem; }
.m-${ID} ul { position: relative; margin: 0 auto; padding: 0; list-style: none; }
.m-${ID} li { position: absolute; top: 0; left: 0; }
.m-${ID} .card { display: flex; flex-direction: column; justify-content: space-between; gap: 1.5rem; height: 100%;
  transform-origin: 50% 50%; will-change: transform, opacity; }
.m-${ID} .card .count { font: 500 0.7901rem/1.2 var(--font-title); color: var(--text-tertiary); }
.m-${ID} .card .mark { display: block; width: 0.75rem; height: 0.75rem; border-radius: 999px; background: var(--surface-secondary); }
.m-${ID} .card h3 { margin: 0; font-size: clamp(1.44rem, 1.3rem + 0.6vw, 1.728rem); line-height: 1.25; }
.m-${ID} .controls { display: flex; align-items: center; gap: 1rem; }
.m-${ID} .controls .m-button { min-width: 2.75rem; padding: 0.5rem 0.75rem; }
.m-${ID} .controls .m-button:hover { border-color: var(--text-primary); }
.m-${ID} .controls .m-button:focus-visible, .m-${ID} .dots button:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 2px; }
.m-${ID} .controls svg { width: 1.25rem; height: 1.25rem; }
.m-${ID} .dots { display: flex; gap: 0.5rem; }
.m-${ID} .dots button { width: 0.5rem; height: 0.5rem; padding: 0; border: 0; border-radius: 999px; cursor: pointer;
  background: var(--border-interactive); transition: background-color 180ms var(--ease), transform 180ms var(--ease); }
.m-${ID} .dots button[aria-selected="true"] { background: var(--text-brand); transform: scale(1.25); }
.m-${ID} .sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
`,
    mount(stage) {
      const count = SERVICES.length;
      const wrap = M.el("div", "wrap");
      const band = M.el("div", "band");
      band.tabIndex = 0;
      band.setAttribute("role", "region");
      band.setAttribute("aria-roledescription", "carousel");
      band.setAttribute("aria-label", "What we bring, use the arrow keys to navigate");
      const list = M.el("ul");
      band.append(list);

      const slots = SERVICES.map((title, i) => {
        const li = M.el("li");
        const card = M.el("div", "m-card card");
        card.setAttribute("role", "group");
        card.setAttribute("aria-roledescription", "slide");
        card.setAttribute("aria-label", `Service ${i + 1} of ${count}`);
        const top = M.el("div");
        top.style.cssText = "display:flex;justify-content:space-between;align-items:center";
        top.append(M.el("span", "count", `${String(i + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`), M.el("span", "mark"));
        card.append(top, M.el("h3", "m-title", `${title}.`));
        li.append(card);
        list.append(li);
        return { li, card };
      });

      const controls = M.el("div", "controls");
      const prev = M.el("button", "m-button border");
      prev.type = "button";
      prev.setAttribute("aria-label", "Previous service");
      prev.innerHTML = CHEVRON("m15 18-6-6 6-6");
      const next = M.el("button", "m-button border");
      next.type = "button";
      next.setAttribute("aria-label", "Next service");
      next.innerHTML = CHEVRON("m9 18 6-6-6-6");
      const dots = M.el("div", "dots");
      dots.setAttribute("role", "tablist");
      dots.setAttribute("aria-label", "Choose a service");
      const dotButtons = SERVICES.map((_, i) => {
        const dot = M.el("button");
        dot.type = "button";
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", `Show service ${i + 1}`);
        dot.addEventListener("click", () => goto(nearest(i)));
        dots.append(dot);
        return dot;
      });
      const live = M.el("span", "sr");
      live.setAttribute("aria-live", "polite");
      controls.append(prev, dots, next);
      wrap.append(band, controls, live);
      stage.append(wrap);

      // Geometry: every distance is a ratio of the card width, as in the original.
      let cw = 280;
      function measure() {
        cw = Math.round(Math.min(300, Math.max(200, stage.clientWidth * 0.42)));
        band.style.maxWidth = `min(100%, ${cw * 2.6}px)`;
        band.style.minHeight = `${Math.round(cw * 1.04)}px`;
        list.style.width = `${cw}px`;
        list.style.height = `${Math.round(cw * 1.04)}px`;
        for (const { card } of slots) {
          card.style.width = `${cw}px`;
          card.style.minHeight = `${Math.round(cw * 0.98)}px`;
        }
        render();
      }

      // One shared position drives every card; each card's offset is its looped distance from it.
      let pos = 0;
      let target = 0;
      const motion = M.spring(SPRING, (x) => {
        pos = x;
        render();
      });

      function render() {
        const flat = M.reduced();
        slots.forEach(({ li, card }, i) => {
          let d = (((i - pos) % count) + count) % count;
          if (d >= count / 2) d -= count;
          const offset = d * cw;
          const p = project(offset, cw, flat);
          li.style.transform = `translateX(${offset}px)`;
          li.style.zIndex = p.zIndex;
          card.style.transform = `perspective(${PERSPECTIVE}px) translateX(${p.x}%) scale(${p.scale}) rotateY(${p.rotateY}deg)`;
          // Seven cards crowd the band where the original had three, so cards past the neighbors fade away.
          card.style.opacity = p.opacity * interpolate(Math.abs(d), [1, 1.8], [1, 0]);
        });
        const page = ((Math.round(target) % count) + count) % count;
        dotButtons.forEach((dot, i) => dot.setAttribute("aria-selected", String(i === page)));
      }

      function announce() {
        const page = ((Math.round(target) % count) + count) % count;
        live.textContent = `${SERVICES[page]}, service ${page + 1} of ${count}.`;
      }
      // The page index closest to the current position that shows service i.
      function nearest(i) {
        const base = Math.round(target);
        const current = ((base % count) + count) % count;
        let delta = i - current;
        if (delta > count / 2) delta -= count;
        if (delta < -count / 2) delta += count;
        return base + delta;
      }
      function goto(page) {
        target = page;
        announce();
        motion.to(target);
      }

      prev.addEventListener("click", () => goto(Math.round(target) - 1));
      next.addEventListener("click", () => goto(Math.round(target) + 1));
      band.addEventListener("keydown", (e) => {
        const actions = {
          ArrowRight: () => goto(Math.round(target) + 1),
          ArrowLeft: () => goto(Math.round(target) - 1),
          Home: () => goto(nearest(0)),
          End: () => goto(nearest(count - 1)),
        };
        if (!actions[e.key]) return;
        e.preventDefault();
        actions[e.key]();
      });

      // Drag follows the pointer one to one, then the same spring snaps to the nearest page.
      let drag = null;
      band.addEventListener("pointerdown", (e) => {
        motion.set(pos);
        drag = { x: e.clientX, pos, t: performance.now(), vx: 0, lastX: e.clientX };
        band.setPointerCapture(e.pointerId);
        band.classList.add("dragging");
      });
      band.addEventListener("pointermove", (e) => {
        if (!drag) return;
        const now = performance.now();
        const dt = Math.max(1, now - drag.t);
        drag.vx = ((e.clientX - drag.lastX) / dt) * 1000;
        drag.lastX = e.clientX;
        drag.t = now;
        target = drag.pos - (e.clientX - drag.x) / cw;
        motion.set(target);
      });
      const release = () => {
        if (!drag) return;
        const vel = -drag.vx / cw;
        motion.set(pos, vel);
        target = Math.round(pos + vel * 0.15);
        drag = null;
        band.classList.remove("dragging");
        announce();
        motion.to(target);
      };
      band.addEventListener("pointerup", release);
      band.addEventListener("pointercancel", release);

      new ResizeObserver(measure).observe(stage);
      measure();

      let run = 0;
      return {
        async play() {
          const token = ++run;
          target = 0;
          motion.set(0);
          if (M.reduced()) {
            goto(3);
            return;
          }
          for (let i = 1; i <= 3; i++) {
            await M.wait(i === 1 ? 400 : 1000);
            if (token !== run) return;
            goto(i);
          }
          await M.wait(1200);
          if (token !== run) return;
          goto(nearest(count - 1));
        },
      };
    },
  });
})();
