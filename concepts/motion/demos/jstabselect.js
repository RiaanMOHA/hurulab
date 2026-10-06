(() => {
  const ID = "tab-select";
  const TIMING = { duration: 300, easing: "cubic-bezier(0.4, 0, 0.2, 1)" };
  const LINKS = ["The problem", "What we do", "The team", "Let's talk"];
  const LANGUAGES = [
    { label: "English", lang: "en" },
    { label: "中文", lang: "zh-Hant" },
  ];

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Sliding language toggle",
    source: "jstabselect.md",
    section: "header",
    where: "The English and 中文 toggle at the foot of the menu window that opens from the header's Menu button.",
    how: "Choosing a language slides the light purple capsule across to it and stretches it to the new word's width, so the current choice is always marked by one shape that moves.",
    css: `
.m-${ID} .window { width: min(22rem, calc(100% - 2rem)); display: grid; gap: 1.5rem; }
.m-${ID} .links { margin: 0; padding: 0; list-style: none; display: grid; gap: 0.5rem; }
.m-${ID} .links a { color: var(--text-primary); text-decoration: none; font-size: 1.44rem; line-height: 1.3; }
.m-${ID} .links a:hover { color: var(--text-brand); }
.m-${ID} .toggle { justify-self: start; border: 1px solid var(--border-subtle); border-radius: 999px; corner-shape: squircle; padding: 0.25rem; background: var(--surface-raised); }
.m-${ID} .toggle ul { position: relative; display: flex; gap: 0.25rem; margin: 0; padding: 0; list-style: none; }
.m-${ID} .toggle li { position: relative; }
.m-${ID} .indicator { position: absolute; top: 0; left: 0; height: 100%; z-index: 1; border-radius: 999px; corner-shape: squircle; background: var(--surface-brand); }
.m-${ID} .toggle button {
  position: relative;
  z-index: 2;
  min-height: 2.75rem;
  padding: 0.5rem 1.25rem;
  border: 0;
  border-radius: 999px;
  background: none;
  color: var(--text-secondary);
  font: 600 0.8889rem/1 var(--font-title);
  cursor: pointer;
}
.m-${ID} .toggle button[aria-pressed="true"] { color: var(--text-on-brand); cursor: default; }
.m-${ID} .toggle button:focus-visible { outline: 2px solid var(--border-focus); outline-offset: -2px; }
`,
    mount(stage) {
      const frame = M.el("div", "m-card window");
      const links = M.el("ul", "links");
      for (const label of LINKS) {
        const item = M.el("li");
        const link = M.el("a", "m-title", label);
        link.href = "#";
        link.addEventListener("click", (e) => e.preventDefault());
        item.append(link);
        links.append(item);
      }
      const toggle = M.el("nav", "toggle");
      toggle.setAttribute("aria-label", "Language");
      const list = M.el("ul");
      const indicator = M.el("div", "indicator");
      indicator.setAttribute("aria-hidden", "true");
      list.append(indicator);
      const tabs = LANGUAGES.map(({ label, lang }, i) => {
        const item = M.el("li");
        const button = M.el("button", "", label);
        button.type = "button";
        button.lang = lang;
        button.addEventListener("click", () => select(i));
        item.append(button);
        list.append(item);
        return { item, button };
      });
      toggle.append(list);
      frame.append(links, toggle);
      stage.append(frame);

      let selected = 0;
      let animation = null;

      function place(i) {
        const { item } = tabs[i];
        indicator.style.left = `${item.offsetLeft}px`;
        indicator.style.width = `${item.offsetWidth}px`;
        tabs.forEach(({ button }, j) => button.setAttribute("aria-pressed", String(j === i)));
      }

      function select(i, instant) {
        if (i === selected && !instant) return;
        const listBox = list.getBoundingClientRect();
        const from = indicator.getBoundingClientRect();
        if (animation) animation.cancel();
        animation = null;
        selected = i;
        place(i);
        if (instant || M.reduced()) return;
        const to = indicator.getBoundingClientRect();
        const dx = from.left - listBox.left - (to.left - listBox.left);
        animation = indicator.animate(
          [
            { transform: `translateX(${dx}px)`, width: `${from.width}px` },
            { transform: "translateX(0)", width: `${to.width}px` },
          ],
          TIMING,
        );
      }

      // The stage is mounted before it joins the page, so the tab boxes are only known once it lays out.
      new ResizeObserver(() => {
        if (!animation || animation.playState === "finished") place(selected);
      }).observe(list);

      let run = 0;
      return {
        async play() {
          const token = ++run;
          select(0, true);
          await M.wait(300);
          if (token !== run) return;
          select(1);
          await M.wait(900);
          if (token !== run) return;
          select(0);
        },
      };
    },
  });
})();
