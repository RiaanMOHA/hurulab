(() => {
  const ID = "curtains-clip-wipe";
  const BOW = 0.16;
  const TIMING = { duration: 500, easing: "cubic-bezier(0.76, 0, 0.24, 1)", fill: "both" };
  const PAGES = [
    { link: "The problem", title: "Why you hesitate before a big technology project.", tint: "var(--surface-brand)" },
    { link: "What we do", title: "What we bring.", tint: "var(--surface-brand-hover)" },
    { link: "Let's talk", title: "What does a good outcome look like for you?", tint: "var(--surface-sunken)" },
  ];

  const r = (n) => Math.round(n * 10) / 10;
  const pad = (n) => String(n + 1).padStart(2, "0");

  // The leading edge sits at x(t) = -bow + t(W + bow), a quadratic curve bulging forward by bow at mid-height.
  function coverPath(t, W, H) {
    const bow = BOW * W;
    const x = -bow + t * (W + bow);
    return `path("M 0 0 L ${r(x)} 0 Q ${r(x + 2 * bow)} ${r(H / 2)} ${r(x)} ${r(H)} L 0 ${r(H)} Z")`;
  }
  function revealPath(t, W, H) {
    const bow = BOW * W;
    const x = -bow + t * (W + bow);
    return `path("M ${r(x)} 0 Q ${r(x + 2 * bow)} ${r(H / 2)} ${r(x)} ${r(H)} L ${r(W)} ${r(H)} L ${r(W)} 0 Z")`;
  }

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Clip wipe between sections",
    source: "curtainsclipwipe.md",
    section: "page",
    where: "Between sections, when a visitor picks a link in the menu window such as The problem or Let's talk.",
    how: "A light purple panel with a curved edge sweeps across the screen, the page jumps to the chosen section while it is covered, and the panel carries on off the right edge to reveal it.",
    css: `
.m-${ID} .wipe { position: absolute; inset: 0; overflow: hidden; background: var(--surface-page); }
.m-${ID} .view {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  padding: 2rem clamp(1.5rem, 6%, 4rem) 6rem;
}
.m-${ID} .kicker, .m-${ID} .index { font: 500 0.7901rem/1.2 var(--font-title); color: var(--text-tertiary); }
.m-${ID} .kicker span { color: var(--text-brand); }
.m-${ID} .view h4 { margin: 0; max-width: 22ch; font-size: clamp(1.728rem, 1.4rem + 1.4vw, 2.488rem); line-height: 1.2; letter-spacing: -0.04em; text-wrap: balance; }
.m-${ID} nav { position: absolute; left: 0; right: 0; bottom: 0; z-index: 1; display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; padding: 1.25rem; }
.m-${ID} nav .m-button { transition: background-color 200ms var(--ease), border-color 200ms var(--ease); }
.m-${ID} nav .m-button:not(.border) { border: 1px solid transparent; cursor: default; }
.m-${ID} nav .m-button.border:hover { background: var(--surface-sunken); }
.m-${ID} nav .m-button:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 2px; }
.m-${ID} .curtain { position: absolute; inset: 0; z-index: 2; pointer-events: none; will-change: clip-path; }
`,
    mount(stage) {
      const wipe = M.el("div", "wipe");
      const view = M.el("section", "view");
      const nav = M.el("nav");
      nav.setAttribute("aria-label", "Sections");
      wipe.append(view, nav);
      stage.append(wipe);

      const buttons = PAGES.map((page, i) => {
        const button = M.el("button", "m-button", page.link);
        button.type = "button";
        button.addEventListener("click", () => go(i));
        nav.append(button);
        return button;
      });

      let index = 0;
      let phase = "idle";
      let target = null;
      let queued = null;
      let curtain = null;
      let animation = null;

      function render() {
        const page = PAGES[index];
        view.replaceChildren();
        const kicker = M.el("span", "kicker");
        kicker.append(M.el("span", "", ">"), ` ${page.link}`);
        view.append(kicker, M.el("h4", "m-title", page.title), M.el("span", "index", `${pad(index)} / ${pad(PAGES.length - 1)}`));
        buttons.forEach((button, i) => {
          button.classList.toggle("border", i !== index);
          button.setAttribute("aria-current", String(i === index));
        });
      }

      function teardown() {
        if (animation) animation.cancel();
        animation = null;
        if (curtain) curtain.remove();
        curtain = null;
        phase = "idle";
        target = queued = null;
      }

      async function go(next) {
        if (phase === "covering") {
          target = next;
          curtain.style.background = PAGES[next].tint;
          return;
        }
        if (phase === "revealing") {
          queued = next;
          return;
        }
        if (next === index) return;
        if (M.reduced()) {
          index = next;
          render();
          return;
        }

        const W = wipe.clientWidth;
        const H = wipe.clientHeight;
        target = next;
        curtain = M.el("div", "curtain");
        curtain.setAttribute("aria-hidden", "true");
        curtain.style.background = PAGES[next].tint;
        curtain.style.clipPath = coverPath(0, W, H);
        wipe.append(curtain);
        const own = curtain;

        phase = "covering";
        animation = curtain.animate({ clipPath: [coverPath(0, W, H), coverPath(1, W, H)] }, TIMING);
        try {
          await animation.finished;
        } catch {
          return;
        }
        if (own !== curtain) return;
        index = target;
        render();

        phase = "revealing";
        animation = curtain.animate({ clipPath: [revealPath(0, W, H), revealPath(1, W, H)] }, TIMING);
        try {
          await animation.finished;
        } catch {
          return;
        }
        if (own !== curtain) return;
        const after = queued;
        teardown();
        if (after !== null) go(after);
      }

      render();
      return {
        play() {
          teardown();
          index = 0;
          render();
          go(1);
        },
      };
    },
  });
})();
