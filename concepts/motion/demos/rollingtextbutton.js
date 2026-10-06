(() => {
  const ID = "rolling-text-button";
  const SPRING = { stiffness: 304.61741978670864, damping: 33.16125578789226, mass: 1, step: 0.002 };
  const STAGGER = 0.04;

  const roll = (spring, target) => new Promise((resolve) => spring.to(target, resolve));

  // Latches a reversal that arrives mid-roll until the current roll has finished.
  function playthrough(apply) {
    let current = false;
    let running = false;
    let pending = null;
    let generation = 0;
    const run = (t) => {
      current = t;
      const own = generation;
      apply(t).then(() => own === generation && complete());
    };
    function complete() {
      if (!running) return;
      running = false;
      if (pending !== null && pending !== current) {
        const t = pending;
        pending = null;
        running = true;
        run(t);
      } else pending = null;
    }
    return {
      request(t) {
        if (t === current) {
          pending = null;
          return;
        }
        if (running) {
          pending = t;
          return;
        }
        running = true;
        run(t);
      },
      reset(rest) {
        generation++;
        running = false;
        pending = null;
        current = false;
        rest();
      },
    };
  }

  function chars(copy, label) {
    return [...label].map((ch) => {
      const span = M.el("span", "char", ch === " " ? " " : ch);
      copy.append(span);
      return span;
    });
  }

  function rollingButton(label, className, perCharacter) {
    const button = M.el("button", `m-button ${className}`);
    button.type = "button";
    button.setAttribute("aria-label", label);
    const clip = M.el("span", "clip");
    clip.setAttribute("aria-hidden", "true");
    const a = M.el("span", "copy");
    const b = M.el("span", "copy parked");
    clip.append(a, b);
    button.append(clip);

    let units;
    if (perCharacter) {
      const aChars = chars(a, label);
      const bChars = chars(b, label);
      units = aChars.map((ch, i) => ({ a: ch, b: bChars[i] }));
    } else {
      a.textContent = label;
      b.textContent = label;
      units = [{ a, b }];
    }
    for (const unit of units) {
      unit.spring = M.spring(SPRING, (p) => {
        unit.a.style.transform = `translateY(${p * 100}%)`;
        unit.b.style.transform = `translateY(${(p - 1) * 100}%)`;
      });
    }
    if (perCharacter) b.classList.remove("parked");

    const timers = [];
    function apply(active) {
      const target = active ? 1 : 0;
      const last = units.length - 1;
      return Promise.all(
        units.map((unit, i) => {
          const order = active ? i : last - i;
          if (!order) return roll(unit.spring, target);
          return new Promise((resolve) => {
            timers.push(setTimeout(() => roll(unit.spring, target).then(resolve), order * STAGGER * 1000));
          });
        }),
      );
    }
    const controller = playthrough(apply);
    const rest = () => {
      timers.splice(0).forEach(clearTimeout);
      units.forEach((unit) => unit.spring.set(0));
    };
    rest();

    let hover = false;
    let focus = false;
    const update = () => {
      if (M.reduced()) return controller.reset(rest);
      controller.request(hover || focus);
    };
    button.addEventListener("pointerenter", (e) => {
      if (e.pointerType === "touch") return;
      hover = true;
      update();
    });
    button.addEventListener("pointerleave", () => {
      hover = false;
      update();
    });
    button.addEventListener("focus", () => {
      focus = true;
      update();
    });
    button.addEventListener("blur", () => {
      focus = false;
      update();
    });

    return {
      button,
      reset: () => {
        hover = focus = false;
        controller.reset(rest);
      },
      request: (t) => !M.reduced() && controller.request(t),
    };
  }

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Rolling text button",
    source: "rollingtextbutton.md",
    section: "hero",
    where: "The Let's Talk button in the hero, and the same button in the header and the closing.",
    how: "On hover or keyboard focus the label rolls down one line and a fresh copy takes its place, so the main call to action answers the pointer without changing size.",
    css: `
.m-${ID} .row { display: flex; flex-wrap: wrap; gap: 3rem; justify-content: center; align-items: flex-start; padding: 2rem 1rem; }
.m-${ID} figure { margin: 0; display: grid; gap: 1rem; justify-items: center; }
.m-${ID} figcaption { font: 500 0.7901rem/1.2 var(--font-title); color: var(--text-tertiary); }
.m-${ID} .m-button { position: relative; overflow: visible; }
.m-${ID} .m-button:not(.border):hover { background: var(--surface-brand-hover); }
.m-${ID} .m-button:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 2px; }
.m-${ID} .clip { position: relative; display: block; overflow: hidden; line-height: 1.25; }
.m-${ID} .copy { display: block; white-space: nowrap; text-align: center; }
.m-${ID} .copy + .copy { position: absolute; inset: 0; }
.m-${ID} .copy.parked { transform: translateY(-100%); }
.m-${ID} .char { display: inline-block; vertical-align: top; }
`,
    mount(stage) {
      const row = M.el("div", "row");
      const whole = rollingButton("Let's Talk", "", false);
      const letters = rollingButton("Let's Talk", "border", true);
      for (const [item, caption] of [
        [whole, "Whole label"],
        [letters, "Letter by letter"],
      ]) {
        const figure = M.el("figure");
        figure.append(item.button, M.el("figcaption", "", caption));
        row.append(figure);
      }
      stage.append(row);

      let run = 0;
      return {
        async play() {
          const token = ++run;
          whole.reset();
          letters.reset();
          if (M.reduced()) return;
          await M.wait(250);
          if (token !== run) return;
          whole.request(true);
          letters.request(true);
          await M.wait(1200);
          if (token !== run) return;
          whole.request(false);
          letters.request(false);
        },
      };
    },
  });
})();
