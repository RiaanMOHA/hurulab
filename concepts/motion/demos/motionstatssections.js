(() => {
  const ID = "counting-stats";
  const UI = { stiffness: 155, damping: 24 };
  const GENTLE = { stiffness: 65, damping: 15 };
  const STAGGER_BASE = 120;
  const STAGGER_TIGHT = 60;
  const TRAVEL = 32;
  const STATS = [
    { value: 3, label: "Steps, from clearly understanding the problem to our \"espresso bar\" session." },
    { value: 7, label: "Services, from building software to ongoing support." },
    { value: 30, label: "Minutes, free, with whoever sits closest to the problem." },
  ];

  const ui = M.springEasing(UI);
  const gentle = M.springEasing(GENTLE);

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Counting stats",
    source: "motionstatssections.md",
    section: "discovery",
    where: "The Discovery section, as a row of real numbers between the giant word and the three step cards.",
    how: "When the row scrolls into view the heading, the line and each card rise in turn, a short marigold stroke draws across each card and its number rolls up from zero like an odometer.",
    css: `
.m-${ID} .section { display: flex; flex-direction: column; gap: 2rem; width: 100%; padding: 2.5rem 2rem; }
.m-${ID} h4 { margin: 0; font: 700 clamp(2.488rem, 2rem + 2.2vw, 3.583rem)/1.1 var(--font-title); letter-spacing: -0.04em; }
.m-${ID} h4 span { color: var(--text-brand); }
.m-${ID} .lede { margin: 0; max-width: 32rem; color: var(--text-secondary); }
.m-${ID} .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr)); gap: 1rem; }
.m-${ID} .stat { display: flex; flex-direction: column; gap: 1rem; height: 100%; }
.m-${ID} .dash { display: block; width: 1.75rem; height: 2px; background: var(--surface-secondary); transform-origin: left center; }
.m-${ID} .figure { display: flex; font: 700 clamp(2rem, 3vw + 1.1rem, 3.5rem)/1 var(--font-title); letter-spacing: -0.02em; font-variant-numeric: tabular-nums; }
.m-${ID} .col { position: relative; display: inline-block; height: 1em; overflow: clip;
  -webkit-mask-image: linear-gradient(to bottom, transparent, #000 0.15em, #000 calc(100% - 0.15em), transparent);
  mask-image: linear-gradient(to bottom, transparent, #000 0.15em, #000 calc(100% - 0.15em), transparent); }
.m-${ID} .stack { display: flex; flex-direction: column; }
.m-${ID} .stack span { display: block; height: 1em; }
.m-${ID} .label { margin: 0; font-size: 0.8889rem; color: var(--text-secondary); }
.m-${ID} .sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
`,
    mount(stage) {
      const section = M.el("div", "section");
      const heading = M.el("h4", "");
      heading.append(M.el("span", "", "Discovery."));
      const lede = M.el("p", "lede", "Discovery brings you the evidence first.");
      const grid = M.el("div", "grid");

      const cards = STATS.map((stat) => {
        const card = M.el("div", "m-card stat");
        const dash = M.el("span", "dash");
        dash.setAttribute("aria-hidden", "true");
        const figure = M.el("div", "figure");
        figure.setAttribute("aria-hidden", "true");
        const digits = [...String(stat.value)].map((digit) => {
          const col = M.el("span", "col");
          const stack = M.el("span", "stack");
          for (let n = 0; n <= 9; n++) stack.append(M.el("span", "", String(n)));
          col.append(stack);
          figure.append(col);
          return { col, stack, digit: Number(digit) };
        });
        card.append(dash, figure, M.el("span", "sr", String(stat.value)), M.el("p", "label", stat.label));
        grid.append(card);
        return { card, dash, digits };
      });
      section.append(heading, lede, grid);
      stage.append(section);

      const rise = (el, delay) =>
        el.animate(
          [
            { opacity: 0, transform: `translateY(${TRAVEL}px)` },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: ui.duration, easing: ui.easing, delay, fill: "both" },
        );

      // From zero, a leading column that did not exist yet fades in while it rolls; trailing zeros stay put.
      function roll({ digits }) {
        digits.forEach(({ col, stack, digit }, i) => {
          const entering = i < digits.length - 1;
          stack.animate([{ transform: "translateY(0)" }, { transform: `translateY(-${digit}em)` }], {
            duration: gentle.duration,
            easing: gentle.easing,
            fill: "both",
          });
          if (entering) {
            col.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 700, easing: "linear", fill: "both" });
          }
        });
      }

      function settle() {
        stage.getAnimations({ subtree: true }).forEach((a) => a.cancel());
        for (const { dash, digits } of cards) {
          dash.style.transform = "scaleX(1)";
          digits.forEach(({ stack, col, digit }) => {
            stack.style.transform = `translateY(-${digit}em)`;
            col.style.opacity = 1;
          });
        }
      }

      const revealed = [heading, lede, grid, ...cards.map((c) => c.card)];
      let run = 0;
      let observer = null;
      function play() {
        const token = ++run;
        if (observer) observer.disconnect();
        stage.getAnimations({ subtree: true }).forEach((a) => a.cancel());
        revealed.forEach((el) => (el.style.opacity = ""));
        for (const { dash, digits } of cards) {
          dash.style.transform = "";
          digits.forEach(({ stack, col }) => {
            stack.style.transform = "";
            col.style.opacity = "";
          });
        }
        if (M.reduced()) return settle();

        rise(heading, 0);
        rise(lede, STAGGER_BASE);
        rise(grid, STAGGER_BASE * 2);
        cards.forEach((item, i) => {
          const delay = STAGGER_BASE * 2 + STAGGER_TIGHT * i;
          item.dash.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], {
            duration: ui.duration,
            easing: ui.easing,
            delay,
            fill: "both",
          });
          item.digits.slice(0, -1).forEach(({ col }) => (col.style.opacity = 0));
          rise(item.card, delay).finished.then(() => token === run && roll(item), () => {});
        });
      }

      // Fires once when 30 percent of the section is visible, like the original's whileInView.
      if (M.reduced()) settle();
      else {
        revealed.forEach((el) => (el.style.opacity = 0));
        observer = new IntersectionObserver(
          (entries) => {
            if (!entries.some((e) => e.isIntersecting)) return;
            observer.disconnect();
            play();
          },
          { threshold: 0.3 },
        );
        observer.observe(stage);
      }

      return { play };
    },
  });
})();
