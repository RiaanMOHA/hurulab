(() => {
  const ID = "smooth-tabs";
  const PX = { rest: 0.3, restSpeed: 2, step: 0.002 };
  const VIEW = { stiffness: 400, damping: 60, ...PX };
  const PILL = { stiffness: 600, damping: 40, ...PX };
  const SPACING = 0.75;
  const FADE = 0.6;
  const STEPS = [
    { tab: "Understand", title: "Start with clearly understanding problems.", text: "We analyze at no cost." },
    { tab: "Do the work", title: "We do the work.", text: "Showing you the fast, provable solution." },
    { tab: "Espresso bar", title: "Together, our “espresso bar” session.", text: "Share, test, measure, imagine what's next." },
  ];

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Smooth tabs with motion blur",
    source: "vuesmoothtabs.md",
    section: "discovery",
    where: "The three Discovery step cards under the giant word Discovery, shown one at a time with a tab for each step.",
    how: "Choosing a step slides the row of cards sideways with a blur that grows with speed, so jumping from the first step to the espresso bar session reads as a longer move than the step next door.",
    css: `
.m-${ID} .smooth { width: min(30rem, calc(100% - 2rem)); display: flex; flex-direction: column; gap: 0.5rem; }
.m-${ID} .views { position: relative; overflow: hidden; height: 12rem; border: 1px solid var(--border-subtle); border-radius: 1.5rem; corner-shape: squircle; background: var(--surface-page); }
.m-${ID} .view { position: absolute; inset: 0; padding: 2rem; display: flex; flex-direction: column; gap: 0.75rem; transform-origin: center; will-change: transform, filter, opacity; isolation: isolate; }
.m-${ID} .step { display: flex; align-items: center; gap: 0.75rem; font: 500 0.7901rem/1.2 var(--font-title); color: var(--text-tertiary); }
.m-${ID} .dot { width: 0.75rem; height: 0.75rem; border-radius: 999px; background: var(--surface-secondary); }
.m-${ID} .view h4 { margin: 0; font-size: 1.44rem; line-height: 1.25; text-wrap: balance; }
.m-${ID} .view p { margin: 0; color: var(--text-secondary); }
.m-${ID} .tabs { position: relative; display: flex; gap: 0.25rem; margin: 0; padding: 0.25rem; list-style: none; border: 1px solid var(--border-subtle); border-radius: 999px; corner-shape: squircle; background: var(--surface-page); }
.m-${ID} .tabs li { display: flex; flex: 1; }
.m-${ID} .pill { position: absolute; top: 0.25rem; bottom: 0.25rem; left: 0; z-index: 0; border-radius: 999px; corner-shape: squircle; background: var(--surface-brand); }
.m-${ID} .tabs button { position: relative; z-index: 1; width: 100%; min-height: 2.75rem; padding: 0.5rem; border: 0; border-radius: 999px; background: none; color: var(--text-secondary); font: 600 0.8889rem/1.1 var(--font-title); cursor: pointer; }
.m-${ID} .tabs button[aria-selected="true"] { color: var(--text-on-brand); }
.m-${ID} .tabs button:focus-visible { outline: 2px solid var(--border-focus); outline-offset: -2px; }
`,
    mount(stage) {
      const root = M.el("div", "smooth");
      const views = M.el("div", "views");
      const tabs = M.el("ul", "tabs");
      tabs.setAttribute("role", "tablist");
      tabs.setAttribute("aria-label", "Discovery steps");
      const pill = M.el("span", "pill");
      pill.setAttribute("aria-hidden", "true");
      tabs.append(pill);
      root.append(views, tabs);
      stage.append(root);

      let active = 0;
      let width = 0;

      const panels = STEPS.map((step, i) => {
        const view = M.el("div", "view");
        view.setAttribute("role", "tabpanel");
        const label = M.el("span", "step");
        label.append(M.el("span", "dot"), `Step ${i + 1}`);
        view.append(label, M.el("h4", "m-title", step.title), M.el("p", "", step.text));
        views.append(view);
        const motion = M.spring(VIEW, (x, v) => {
          view.style.transform = `translate3d(${x}px, 0, 0)`;
          view.style.opacity = String(width ? Math.max(0, 1 - Math.abs(x) / (FADE * width)) : i === active ? 1 : 0);
          view.style.filter = M.reduced() ? "none" : `blur(${Math.abs(v) / 250}px)`;
          view.setAttribute("aria-hidden", String(i !== active));
        });
        return { view, motion };
      });

      const buttons = STEPS.map((step, i) => {
        const item = M.el("li");
        const button = M.el("button", "", step.tab);
        button.type = "button";
        button.setAttribute("role", "tab");
        button.addEventListener("click", () => select(i));
        item.append(button);
        tabs.append(item);
        return { item, button };
      });

      const pillX = M.spring(PILL, (x) => (pill.style.transform = `translateX(${x}px)`));
      const pillW = M.spring(PILL, (w) => (pill.style.width = `${w}px`));

      const offset = (i) => (i - active) * SPACING * width;

      function settle(instant) {
        const box = buttons[active].item;
        const move = instant || M.reduced() ? "set" : "to";
        panels.forEach(({ motion }, i) => motion[move](offset(i)));
        pillX[move](box.offsetLeft);
        pillW[move](box.offsetWidth);
        buttons.forEach(({ button }, i) => button.setAttribute("aria-selected", String(i === active)));
      }

      function select(i, instant) {
        active = i;
        settle(instant);
      }

      new ResizeObserver(() => {
        width = views.getBoundingClientRect().width;
        settle(true);
      }).observe(root);
      settle(true);

      let run = 0;
      return {
        async play() {
          const token = ++run;
          select(0, true);
          await M.wait(300);
          if (token !== run) return;
          select(1);
          await M.wait(1000);
          if (token !== run) return;
          select(2);
          await M.wait(1000);
          if (token !== run) return;
          select(0);
        },
      };
    },
  });
})();
