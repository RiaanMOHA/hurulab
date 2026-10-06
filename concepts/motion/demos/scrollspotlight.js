(() => {
  const ID = "scroll-spotlight";
  const FOCUS_OFFSET = 45;
  const DIMMED = 0.4;
  const REVEAL_SCALE = 1.03;
  const STEPS = [
    { title: "Start with clearly understanding problems.", body: "We analyze at no cost." },
    { title: "We do the work.", body: "Showing you the fast, provable solution." },
    { title: "Together, our \"espresso bar\" session.", body: "Share, test, measure, imagine what's next." },
  ];

  const transition = ({ easing, duration }) => `${duration}ms ${easing}`;
  const SNAP = transition(M.springEasing({ stiffness: 846, damping: 52 }));
  const UI = transition(M.springEasing({ stiffness: 155, damping: 24 }));
  const GENTLE = transition(M.springEasing({ stiffness: 65, damping: 15 }));

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Scroll spotlight",
    source: "scrollspotlight.md",
    section: "discovery",
    where: "The Discovery section, with the three steps as copy on the left and a pinned step card on the right.",
    how: "As the visitor scrolls, the line crossing the middle of the screen brightens while the others stay dim, and the pinned card beside it crossfades to the matching step.",
    css: `
.stage.m-${ID} { display: block; place-items: normal; height: 24rem; min-height: 0; overflow: auto; overscroll-behavior: contain; scrollbar-width: thin; }
.m-${ID} .layout { container-type: inline-size; padding: 0 2rem; }
.m-${ID} .grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; }
.m-${ID} .aside { display: none; }
@container (min-width: 30rem) { .m-${ID} .grid { grid-template-columns: 1fr 1fr; } .m-${ID} .aside { display: block; } }
.m-${ID} .copy { padding-bottom: 7rem; }
.m-${ID} article { display: flex; flex-direction: column; justify-content: center; gap: 1rem; min-height: calc(24rem * 0.72); }
.m-${ID} article:first-child { min-height: calc(24rem * 0.86); }
.m-${ID} .line { margin: 0; opacity: ${DIMMED}; transition: opacity ${SNAP}; }
.m-${ID} .line.is-active { opacity: 1; }
.m-${ID} h4.line { font: 700 clamp(1.44rem, 1.3rem + 0.6vw, 1.728rem)/1.25 var(--font-title); letter-spacing: -0.02em; }
.m-${ID} p.line { max-width: 24rem; color: var(--text-secondary); }
.m-${ID} .pin { position: sticky; top: calc(24rem * 0.13); display: flex; gap: 1.5rem; margin-top: calc(24rem * 0.13); }
.m-${ID} ol { display: flex; flex-direction: column; gap: 1rem; margin: 0; padding: 0.5rem 0 0; list-style: none; }
.m-${ID} ol li { display: flex; align-items: center; gap: 0.75rem; }
.m-${ID} .dot { width: 0.5rem; height: 0.5rem; border-radius: 999px; background: var(--border-interactive);
  transition: transform ${SNAP}, background-color 180ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 180ms cubic-bezier(0.16, 1, 0.3, 1); }
.m-${ID} .num { font: 500 0.625rem/1 var(--font-title); letter-spacing: 0.16em; font-variant-numeric: tabular-nums; color: var(--text-tertiary);
  transition: color 180ms cubic-bezier(0.16, 1, 0.3, 1); }
.m-${ID} li.is-active .dot { transform: scale(1.4); background: var(--text-brand); box-shadow: 0 0 0 3px color-mix(in oklch, var(--text-brand) 22%, transparent); }
.m-${ID} li.is-active .num { color: var(--text-primary); }
.m-${ID} .frame { position: relative; flex: 1; aspect-ratio: 4 / 3; }
.m-${ID} .visual { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: space-between;
  opacity: 0; transform: scale(${REVEAL_SCALE}); transition: opacity ${UI}, transform ${UI}; }
.m-${ID} .visual.is-active { opacity: 1; transform: scale(1); transition: opacity ${GENTLE}, transform ${GENTLE}; }
.m-${ID} .visual .tag { display: flex; justify-content: space-between; align-items: center; font: 500 0.7023rem/1.2 var(--font-title); color: var(--text-tertiary); }
.m-${ID} .visual .mark { width: 0.75rem; height: 0.75rem; border-radius: 999px; background: var(--surface-secondary); }
.m-${ID} .visual .big { font: 700 clamp(3.5rem, 2rem + 5vw, 6rem)/0.8 var(--font-title); letter-spacing: -0.04em; color: var(--text-brand); }
@media (prefers-reduced-motion: reduce) {
  .m-${ID} .visual, .m-${ID} .visual.is-active { transform: none; }
}
`,
    mount(stage) {
      const layout = M.el("div", "layout");
      const grid = M.el("div", "grid");
      const copy = M.el("div", "copy");
      const lines = [];
      STEPS.forEach((step, i) => {
        const article = M.el("article");
        const title = M.el("h4", "line", step.title);
        const body = M.el("p", "line", step.body);
        title.dataset.item = body.dataset.item = i;
        title.dataset.line = `${i}-t`;
        body.dataset.line = `${i}-b`;
        article.append(title, body);
        copy.append(article);
        lines.push(title, body);
      });

      const aside = M.el("div", "aside");
      aside.setAttribute("aria-hidden", "true");
      const pin = M.el("div", "pin");
      const rail = M.el("ol");
      rail.setAttribute("role", "list");
      const frame = M.el("div", "frame");
      const dots = [];
      const visuals = STEPS.map((step, i) => {
        const li = M.el("li");
        li.append(M.el("span", "dot"), M.el("span", "num", String(i + 1).padStart(2, "0")));
        rail.append(li);
        dots.push(li);
        const visual = M.el("div", "m-card visual");
        const tag = M.el("div", "tag");
        tag.append(M.el("span", "", `Step ${i + 1} of ${STEPS.length}`), M.el("span", "mark"));
        visual.append(tag, M.el("span", "big", String(i + 1)));
        frame.append(visual);
        return visual;
      });
      pin.append(rail, frame);
      aside.append(pin);
      grid.append(copy, aside);
      layout.append(grid);
      stage.append(layout);

      let activeLine = "0-t";
      let activeItem = 0;
      function render() {
        const still = M.reduced();
        lines.forEach((line) => line.classList.toggle("is-active", still || line.dataset.line === activeLine));
        dots.forEach((dot, i) => dot.classList.toggle("is-active", i === activeItem));
        visuals.forEach((visual, i) => visual.classList.toggle("is-active", i === activeItem));
      }
      render();

      // The reading band is the middle tenth of the scroll area; the last line to enter it wins.
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            activeLine = entry.target.dataset.line;
            activeItem = Number(entry.target.dataset.item);
          }
          render();
        },
        { root: stage, rootMargin: `-${FOCUS_OFFSET}% 0px -${FOCUS_OFFSET}% 0px`, threshold: 0 },
      );
      lines.forEach((line) => observer.observe(line));

      let raf = 0;
      const stop = () => {
        cancelAnimationFrame(raf);
        raf = 0;
      };
      for (const type of ["wheel", "touchstart", "pointerdown", "keydown"]) {
        stage.addEventListener(type, stop, { passive: true });
      }

      return {
        play() {
          stop();
          stage.scrollTop = 0;
          activeLine = "0-t";
          activeItem = 0;
          render();
          const end = stage.scrollHeight - stage.clientHeight;
          if (M.reduced()) {
            stage.scrollTop = end;
            return;
          }
          const duration = 6000;
          const hold = 500;
          const start = performance.now() + hold;
          const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
          const frame = (now) => {
            const t = Math.min(1, Math.max(0, (now - start) / duration));
            stage.scrollTop = ease(t) * end;
            raf = t < 1 ? requestAnimationFrame(frame) : 0;
          };
          raf = requestAnimationFrame(frame);
        },
      };
    },
  });
})();
