(() => {
  const ID = "mega-menu";
  // Indicator: Motion's default layout spring, measured at about 0.7% overshoot.
  const SLIDE = { stiffness: 700, damping: 45, rest: 0.1 };
  // Panel, grid and columns: visualDuration 0.3, bounce 0, so no overshoot.
  const DROP = { stiffness: 304.6, damping: 34.9 };
  // Chevron: the bouncier spring, about 4.6% past 180 degrees.
  const FLIP = { stiffness: 200, damping: 20 };
  const STAGGER = 40;
  const CHEVRON =
    '<svg viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const PANELS = [
    {
      label: "The problem",
      columns: [
        { heading: "01", links: ["The price you paid was more than you were told."] },
        { heading: "02", links: ["Nothing says it will meet your goal."] },
        { heading: "03", links: ["You get something, and it isn't what you asked for."] },
      ],
    },
    {
      label: "Discovery",
      columns: [
        { heading: "01", links: ["Start with clearly understanding problems."], note: "We analyze at no cost." },
        { heading: "02", links: ["We do the work."], note: "Showing you the fast, provable solution." },
        { heading: "03", links: ['Together, our "espresso bar" session.'], note: "Share, test, measure, imagine what's next." },
      ],
    },
    {
      label: "What we do",
      columns: [
        { links: ["Building software", "Automating repetitive work", "Websites and online presence"] },
        { links: ["Answers from your data", "Considered AI"] },
        { links: ["Training your team on their own work", "Ongoing support"] },
      ],
    },
  ];

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Mega menu with a sliding indicator",
    source: "vuemegamenu.md",
    section: "header",
    where: "The header on wide screens, as a bar of section links whose panels preview The problem, Discovery and What we bring before the visitor scrolls there.",
    how: "Hovering a link slides the purple capsule under it, flips its chevron and drops a card whose columns rise in one after another, and moving off the bar folds the card away.",
    css: `
.m-mega-menu { container-type: inline-size; }
.m-mega-menu .wrap {
  position: relative;
  align-self: start;
  width: min(40rem, calc(100% - 2rem));
  margin-top: 3rem;
}
.m-mega-menu .nav {
  position: relative;
  display: flex;
  gap: 2px;
  width: fit-content;
  margin: 0 auto;
  padding: 0.375rem;
  border: 1px solid var(--border-subtle);
  border-radius: 999px;
  corner-shape: squircle;
  background: var(--surface-page);
}
.m-mega-menu .indicator {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 999px;
  corner-shape: squircle;
  background: var(--surface-brand);
}
.m-mega-menu .nav-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.75rem 1rem;
  border: 0;
  border-radius: 999px;
  background: none;
  color: var(--text-secondary);
  font: 600 0.8889rem/1 var(--font-title);
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.2s ease;
}
.m-mega-menu .nav-button.active { color: var(--text-on-brand); }
.m-mega-menu .nav-button:focus-visible { outline: 2px solid var(--border-focus); outline-offset: -2px; }
.m-mega-menu .nav-button svg {
  width: 10px;
  height: 6px;
  transform-box: view-box;
  transform-origin: center;
}
.m-mega-menu .panel {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  transform-origin: 50% 0;
}
.m-mega-menu .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  gap: 1.25rem;
}
.m-mega-menu .heading {
  display: block;
  margin-bottom: 0.5rem;
  padding: 0 0.625rem;
  color: var(--text-tertiary);
  font: 500 0.7901rem/1.2 var(--font-title);
}
.m-mega-menu .link {
  padding: 0.5rem 0.625rem;
  border-radius: 0.75rem;
  color: var(--text-primary);
  font: 500 0.9375rem/1.35 var(--font-body);
  transition: background-color 0.15s ease;
}
.m-mega-menu .link:hover { background: var(--surface-raised); }
.m-mega-menu .note {
  margin: 0;
  padding: 0 0.625rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
}
@container (max-width: 30rem) {
  .m-mega-menu .wrap { margin-top: 1rem; }
  .m-mega-menu .nav { width: 100%; }
  .m-mega-menu .nav-button {
    flex: 1 1 0;
    justify-content: center;
    padding: 0.5rem 0.375rem;
    font-size: 0.75rem;
    line-height: 1.15;
    white-space: normal;
    gap: 0.25rem;
  }
  .m-mega-menu .panel { padding: 1rem; }
  .m-mega-menu .grid { gap: 0.5rem; }
  .m-mega-menu .link { padding-block: 0.25rem; font-size: 0.875rem; }
  .m-mega-menu .note { display: none; }
}
`,
    mount(stage) {
      const wrap = M.el("div", "wrap");
      const nav = M.el("nav", "nav");
      nav.setAttribute("aria-label", "Landing page sections");
      const indicator = M.el("div", "indicator");
      indicator.hidden = true;
      nav.append(indicator);

      const panel = M.el("div", "panel m-card");
      panel.hidden = true;
      const grid = M.el("div", "grid");
      panel.append(grid);
      wrap.append(nav, panel);
      stage.append(wrap);

      let active = -1;
      let revealTimers = [];
      let script = 0;

      const box = { x: 0, w: 0 };
      const paintIndicator = () => {
        indicator.style.transform = `translateX(${box.x}px)`;
        indicator.style.width = `${box.w}px`;
      };
      const slideX = M.spring(SLIDE, (x) => { box.x = x; paintIndicator(); });
      const slideW = M.spring(SLIDE, (w) => { box.w = w; paintIndicator(); });

      const drop = M.spring(DROP, (p) => {
        panel.style.opacity = Math.min(1, p);
        panel.style.transform = `translateY(${-8 * (1 - p)}px)`;
      });
      const gridFade = M.spring(DROP, (p) => { grid.style.opacity = Math.min(1, p); });

      const buttons = [];
      const chevrons = PANELS.map((item, index) => {
        const button = M.el("button", "nav-button");
        button.type = "button";
        button.setAttribute("aria-expanded", "false");
        button.append(item.label);
        button.insertAdjacentHTML("beforeend", CHEVRON);
        const svg = button.querySelector("svg");
        button.addEventListener("mouseenter", () => open(index));
        button.addEventListener("focus", () => open(index));
        button.addEventListener("click", () => open(index));
        nav.append(button);
        buttons.push(button);
        return M.spring(FLIP, (p) => { svg.style.transform = `rotate(${180 * p}deg)`; });
      });

      function fill(index) {
        revealTimers.forEach(clearTimeout);
        revealTimers = [];
        grid.replaceChildren();
        PANELS[index].columns.forEach((column, order) => {
          const node = M.el("div", "column");
          if (column.heading) node.append(M.el("span", "heading", column.heading));
          column.links.forEach((text) => node.append(M.el("div", "link", text)));
          if (column.note) node.append(M.el("p", "note", column.note));
          grid.append(node);
          const rise = M.spring(DROP, (p) => {
            node.style.opacity = Math.min(1, p);
            node.style.transform = `translateY(${8 * (1 - p)}px)`;
          });
          rise.set(0);
          revealTimers.push(setTimeout(() => rise.to(1), order * STAGGER));
        });
        gridFade.set(0);
        gridFade.to(1);
      }

      function place(index, animate) {
        const button = buttons[index];
        indicator.style.top = `${button.offsetTop + 2}px`;
        indicator.style.height = `${button.offsetHeight - 4}px`;
        const x = button.offsetLeft + 2;
        const w = button.offsetWidth - 4;
        if (animate) {
          slideX.to(x);
          slideW.to(w);
        } else {
          slideX.set(x);
          slideW.set(w);
        }
      }

      function open(index) {
        if (index === active) return;
        const wasOpen = active >= 0;
        if (wasOpen) {
          chevrons[active].to(0);
          buttons[active].classList.remove("active");
          buttons[active].setAttribute("aria-expanded", "false");
        }
        active = index;
        buttons[index].classList.add("active");
        buttons[index].setAttribute("aria-expanded", "true");
        chevrons[index].to(1);
        indicator.hidden = false;
        place(index, wasOpen);
        fill(index);
        if (!wasOpen) {
          panel.hidden = false;
          drop.to(1);
        }
      }

      function close() {
        if (active < 0) return;
        chevrons[active].to(0);
        buttons[active].classList.remove("active");
        buttons[active].setAttribute("aria-expanded", "false");
        active = -1;
        indicator.hidden = true;
        drop.to(0, () => { panel.hidden = true; });
      }

      function reset() {
        revealTimers.forEach(clearTimeout);
        buttons.forEach((button) => {
          button.classList.remove("active");
          button.setAttribute("aria-expanded", "false");
        });
        chevrons.forEach((chevron) => chevron.set(0));
        drop.set(0);
        panel.hidden = true;
        indicator.hidden = true;
        active = -1;
      }

      wrap.addEventListener("mouseleave", close);
      wrap.addEventListener("focusout", (event) => {
        if (!wrap.contains(event.relatedTarget)) close();
      });
      wrap.addEventListener("keydown", (event) => {
        if (event.key === "Escape") close();
      });

      return {
        async play() {
          const run = ++script;
          reset();
          const steps = [[300, () => open(0)], [1300, () => open(1)], [1300, () => open(2)], [1700, close]];
          for (const [delay, step] of steps) {
            await M.wait(delay);
            if (run !== script) return;
            step();
          }
        },
      };
    },
  });
})();
