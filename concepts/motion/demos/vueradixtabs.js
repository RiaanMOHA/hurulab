(() => {
  const ID = "radix-tabs";
  const LAYOUT = { duration: 450, easing: "cubic-bezier(0.4, 0, 0.1, 1)" };
  const FADE = "cubic-bezier(0.25, 0.1, 0.35, 1)";
  const EXIT = { duration: 150, easing: FADE, fill: "forwards" };
  const ENTER = { duration: 300, easing: FADE };
  const PRESS = { stiffness: 550, damping: 30, rest: 0.0005, restSpeed: 0.01, step: 0.002 };
  const CLOSING = "These risks come from deciding before you have the evidence. Discovery brings you the evidence first.";
  const RISKS = [
    { tab: "The price", title: "The price you paid was more than you were told." },
    { tab: "The goal", title: "Nothing says it will meet your goal." },
    { tab: "The result", title: "You get something, and it isn't what you asked for.", closing: true },
  ];

  function panel(risk) {
    const node = M.el("div", "panel");
    node.setAttribute("role", "tabpanel");
    node.append(M.el("h4", "m-title", risk.title));
    if (risk.closing) {
      const button = M.el("button", "m-button", "Let's Talk");
      button.type = "button";
      const scale = M.spring(PRESS, (x) => (button.style.transform = M.reduced() ? "" : `scale(${x})`), 1);
      const press = (goal) => scale.to(goal);
      button.addEventListener("pointerdown", () => press(0.95));
      for (const type of ["pointerup", "pointerleave", "pointercancel"]) button.addEventListener(type, () => press(1));
      button.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && press(0.95));
      button.addEventListener("keyup", () => press(1));
      node.append(M.el("p", "", CLOSING), button);
      node.press = press;
    }
    return node;
  }

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Tabs with a sliding underline",
    source: "vueradixtabs.md",
    section: "problem",
    where: "The three stacked cards under Why you hesitate before a big technology project, gathered into one card with a tab for each risk.",
    how: "Choosing a risk slides the purple underline to its tab, eases the card to the new height, and blurs the old sentence out before the new one sharpens in.",
    css: `
.m-${ID} .tabs-root { align-self: start; margin: 3rem 0; width: min(30rem, calc(100% - 2rem)); padding: 0; overflow: hidden; display: flex; flex-direction: column; }
.m-${ID} .list { position: relative; display: flex; border-bottom: 1px solid var(--border-subtle); }
.m-${ID} .list button {
  flex: 1;
  min-height: 2.75rem;
  padding: 0 1rem;
  border: 0;
  background: transparent;
  color: var(--text-tertiary);
  font: 600 0.8889rem/1 var(--font-title);
  cursor: pointer;
  transition: color 200ms ease;
}
.m-${ID} .list button:hover, .m-${ID} .list button[aria-selected="true"] { color: var(--text-primary); }
.m-${ID} .list button:focus-visible { outline: 2px solid var(--border-focus); outline-offset: -2px; }
.m-${ID} .indicator { position: absolute; left: 0; bottom: -1px; height: 2px; background: var(--text-brand); }
.m-${ID} .body { position: relative; }
.m-${ID} .panel { padding: 1.5rem; display: grid; gap: 1rem; justify-items: start; will-change: opacity, filter; }
.m-${ID} .panel h4 { margin: 0; font-size: 1.44rem; line-height: 1.25; text-wrap: balance; }
.m-${ID} .panel p { margin: 0; color: var(--text-secondary); }
.m-${ID} .panel .m-button:hover { background: var(--surface-brand-hover); }
.m-${ID} .measure { position: absolute; left: 0; right: 0; top: 0; visibility: hidden; }
`,
    mount(stage) {
      const root = M.el("div", "m-card tabs-root");
      const list = M.el("div", "list");
      list.setAttribute("role", "tablist");
      list.setAttribute("aria-label", "The risks");
      const indicator = M.el("div", "indicator");
      indicator.setAttribute("aria-hidden", "true");
      const body = M.el("div", "body");
      root.append(list, body);
      stage.append(root);

      const triggers = RISKS.map((risk, i) => {
        const button = M.el("button", "", risk.tab);
        button.type = "button";
        button.setAttribute("role", "tab");
        button.addEventListener("click", () => select(i));
        button.addEventListener("keydown", (e) => {
          const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
          if (!step) return;
          const next = (i + step + RISKS.length) % RISKS.length;
          triggers[next].focus();
          select(next);
        });
        list.append(button);
        return button;
      });
      list.append(indicator);

      let active = 0;
      let shown = 0;
      let current = panel(RISKS[0]);
      let swapping = false;
      let generation = 0;
      let slide = null;
      let resize = null;
      body.append(current);

      function placeIndicator() {
        const button = triggers[active];
        indicator.style.width = `${button.offsetWidth}px`;
        indicator.style.transform = `translateX(${button.offsetLeft}px)`;
        triggers.forEach((t, j) => {
          t.setAttribute("aria-selected", String(j === active));
          t.tabIndex = j === active ? 0 : -1;
        });
      }

      function heightOf(index) {
        const probe = panel(RISKS[index]);
        probe.classList.add("measure");
        body.append(probe);
        const height = probe.offsetHeight;
        probe.remove();
        return height;
      }

      async function swap() {
        if (swapping) return;
        swapping = true;
        const own = generation;
        while (shown !== active) {
          current.getAnimations().forEach((a) => a.commitStyles?.());
          current.getAnimations().forEach((a) => a.cancel());
          const leaving = current.animate({ opacity: [getComputedStyle(current).opacity, 0], filter: [getComputedStyle(current).filter.replace("none", "blur(0px)"), "blur(5px)"] }, EXIT);
          try {
            await leaving.finished;
          } catch {
            break;
          }
          if (own !== generation) break;
          shown = active;
          const next = panel(RISKS[shown]);
          current.replaceWith(next);
          current = next;
          current.animate({ opacity: [0, 1], filter: ["blur(5px)", "blur(0px)"] }, ENTER);
        }
        if (own === generation) swapping = false;
      }

      function select(i, instant) {
        if (i === active && !instant) return;
        const fromX = indicator.getBoundingClientRect().left - list.getBoundingClientRect().left;
        const fromH = body.getBoundingClientRect().height;
        active = i;
        placeIndicator();

        if (instant || M.reduced()) {
          generation++;
          swapping = false;
          slide?.cancel();
          resize?.cancel();
          body.style.height = "";
          shown = active;
          const next = panel(RISKS[shown]);
          current.replaceWith(next);
          current = next;
          return;
        }

        const toX = triggers[i].offsetLeft;
        const toH = heightOf(i);
        slide?.cancel();
        slide = indicator.animate([{ transform: `translateX(${fromX}px)` }, { transform: `translateX(${toX}px)` }], LAYOUT);
        resize?.cancel();
        body.style.height = `${toH}px`;
        resize = body.animate([{ height: `${fromH}px` }, { height: `${toH}px` }], LAYOUT);
        resize.finished.then(() => (body.style.height = ""), () => {});
        swap();
      }

      new ResizeObserver(() => {
        if (!slide || slide.playState === "finished") placeIndicator();
      }).observe(list);

      let run = 0;
      return {
        async play() {
          const token = ++run;
          select(0, true);
          await M.wait(300);
          if (token !== run) return;
          select(2);
          await M.wait(1100);
          if (token !== run || !current.press) return;
          current.press(0.95);
          await M.wait(220);
          current.press?.(1);
          await M.wait(700);
          if (token !== run) return;
          select(1);
        },
      };
    },
  });
})();
