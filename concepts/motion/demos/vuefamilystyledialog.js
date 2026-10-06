(() => {
  const ID = "talk-morph";
  // visualDuration 0.2, bounce 0: Motion's conversion gives stiffness 685, damping 52.4.
  const MORPH = { stiffness: 685, damping: 52.4 };
  const OVERLAY_MS = 200;
  const EXIT_Y = 100;
  const CLOSE_ICON =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Let's Talk button that becomes a card",
    source: "vuefamilystyledialog.md",
    section: "closing",
    where: "The Let's Talk button under the closing question, What does a good outcome look like for you.",
    how: "Pressing it grows the button upward into a short card that repeats the free thirty minute offer, with the same purple button landing in the card's corner to carry on to the contact panel.",
    css: `
.m-talk-morph .question {
  align-self: start;
  max-width: 18ch;
  margin: 2.5rem 1rem 0;
  font-size: clamp(1.44rem, 1.3rem + 0.6vw, 1.728rem);
  line-height: 1.25;
  text-align: center;
}
.m-talk-morph .launch,
.m-talk-morph .card {
  position: absolute;
  bottom: 1.25rem;
  left: 0;
  right: 0;
  width: min(24rem, calc(100% - 2rem));
  margin-inline: auto;
}
.m-talk-morph .launch { display: flex; justify-content: center; }
.m-talk-morph .launch .m-button { width: min(18rem, 100%); }
.m-talk-morph .m-button span { display: inline-block; }
.m-talk-morph .overlay {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: oklch(0.196 0.026 280 / 0.25);
  backdrop-filter: blur(3px);
}
.m-talk-morph .card {
  z-index: 3;
  overflow: clip;
  padding: 0;
  transform-origin: 0 0;
}
.m-talk-morph .content {
  position: relative;
  padding: 1.5rem;
  transform-origin: 0 0;
}
.m-talk-morph .title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0 0 1rem;
  font-size: 1.2rem;
}
.m-talk-morph .mark {
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 0.125rem;
  background: var(--surface-secondary);
}
.m-talk-morph .content p { margin: 0; color: var(--text-secondary); }
.m-talk-morph .controls {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-top: 1.5rem;
}
.m-talk-morph .save { transform-origin: 0 0; }
.m-talk-morph .close {
  position: absolute;
  top: 1.125rem;
  right: 1.125rem;
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border: 0;
  border-radius: 999px;
  background: none;
  color: var(--text-tertiary);
  cursor: pointer;
}
.m-talk-morph .close svg { width: 1.125rem; height: 1.125rem; }
.m-talk-morph button:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 2px; }
`,
    mount(stage) {
      const question = M.el("p", "question m-title", "What does a good outcome look like for you?");

      const launch = M.el("div", "launch");
      const opener = M.el("button", "m-button");
      opener.type = "button";
      opener.append(M.el("span", "", "Let's Talk"));
      launch.append(opener);

      const overlay = M.el("div", "overlay");
      overlay.hidden = true;

      const card = M.el("div", "card m-card");
      card.setAttribute("role", "dialog");
      card.setAttribute("aria-label", "Let's talk");
      card.hidden = true;
      const content = M.el("div", "content");
      const title = M.el("h3", "title m-title");
      title.append(M.el("span", "mark"), "Let's talk.");
      const text = M.el("p", "", "Thirty minutes, free, with whoever sits closest to the problem.");
      const controls = M.el("div", "controls");
      const cancel = M.el("button", "m-button border", "Not Now");
      cancel.type = "button";
      const save = M.el("button", "m-button save");
      save.type = "button";
      const saveLabel = M.el("span", "", "Let's Talk");
      save.append(saveLabel);
      controls.append(cancel, save);
      content.append(title, text, controls);
      const closer = M.el("button", "close");
      closer.type = "button";
      closer.setAttribute("aria-label", "Close");
      closer.innerHTML = CLOSE_ICON;
      card.append(content, closer);

      stage.append(question, launch, overlay, card);

      let geometry = null;
      let isOpen = false;
      let script = 0;
      const state = { p: 0, y: 0 };

      function render() {
        if (!geometry) return;
        const { card: c, button: b, radius } = geometry;
        const { p, y } = state;
        const sx = M.lerp(c.sx, 1, p);
        const sy = M.lerp(c.sy, 1, p);
        const tx = c.dx * (1 - p);
        const ty = c.dy * (1 - p);
        card.style.opacity = Math.max(0, Math.min(1, p));
        card.style.transform = `translate(${tx}px, ${ty}px) scale(${sx}, ${sy})`;
        card.style.borderRadius = `${radius / sx}px / ${radius / sy}px`;
        content.style.transform = `scale(${1 / sx}, ${1 / sy}) translateY(${y}px)`;
        const s = M.lerp(b.from.width, b.to.width, p) / b.to.width;
        const bx = M.lerp(b.from.left, b.to.left, p) - b.to.left - tx;
        const by = M.lerp(b.from.top, b.to.top, p) - b.to.top - ty - y;
        save.style.transform = `translate(${bx}px, ${by}px) scale(${s}, 1)`;
        save.style.borderRadius = `${b.to.height / 2 / s}px / ${b.to.height / 2}px`;
        saveLabel.style.transform = `scaleX(${1 / s})`;
      }

      const morph = M.spring(MORPH, (p) => { state.p = p; render(); });
      const slide = M.spring({ ...MORPH, rest: 0.1 }, (y) => { state.y = y; render(); });
      const press = M.spring(MORPH, (p) => { opener.style.transform = `scale(${1 - 0.05 * p})`; });

      function measure() {
        card.hidden = false;
        [card, content, save, saveLabel].forEach((node) => { node.style.transform = ""; });
        card.style.borderRadius = "";
        const from = launch.getBoundingClientRect();
        const to = card.getBoundingClientRect();
        geometry = {
          radius: parseFloat(getComputedStyle(card).borderTopLeftRadius),
          card: {
            dx: from.left - to.left,
            dy: from.top - to.top,
            sx: from.width / to.width,
            sy: from.height / to.height,
          },
          button: { from: opener.getBoundingClientRect(), to: save.getBoundingClientRect() },
        };
      }

      function fadeOverlay(show) {
        overlay.getAnimations().forEach((animation) => animation.cancel());
        overlay.hidden = false;
        if (M.reduced()) {
          overlay.hidden = !show;
          return;
        }
        const keyframes = show ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 1 }, { opacity: 0 }];
        overlay
          .animate(keyframes, { duration: OVERLAY_MS, easing: "linear", fill: "forwards" })
          .finished.then(() => { if (!isOpen) overlay.hidden = true; })
          .catch(() => {});
      }

      function open() {
        if (isOpen) return;
        isOpen = true;
        if (card.hidden) {
          measure();
          slide.set(0);
          morph.set(0);
        }
        fadeOverlay(true);
        slide.to(0);
        morph.to(1);
      }

      function close() {
        if (!isOpen) return;
        isOpen = false;
        fadeOverlay(false);
        slide.to(EXIT_Y);
        morph.to(0, () => { card.hidden = true; });
      }

      function reset() {
        isOpen = false;
        morph.set(0);
        slide.set(0);
        press.set(0);
        card.hidden = true;
        overlay.getAnimations().forEach((animation) => animation.cancel());
        overlay.hidden = true;
      }

      opener.addEventListener("pointerdown", () => press.to(1));
      ["pointerup", "pointerleave", "pointercancel"].forEach((type) =>
        opener.addEventListener(type, () => press.to(0)),
      );
      opener.addEventListener("click", open);
      [cancel, save, closer, overlay].forEach((node) => node.addEventListener("click", close));
      stage.addEventListener("keydown", (event) => {
        if (event.key === "Escape") close();
      });

      return {
        async play() {
          const run = ++script;
          reset();
          const steps = [
            [400, () => press.to(1)],
            [160, () => { press.to(0); open(); }],
            [2000, close],
          ];
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
