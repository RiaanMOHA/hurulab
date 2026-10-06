(() => {
  const ID = "border-beam";
  const SIZE = 180;
  const DURATION = 9;
  const THICKNESS = 2;

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Border beam",
    source: "borderbeam.md",
    section: "closing",
    where: "The card that holds the closing question and its Let's Talk button, just above the wordmark.",
    how: "A thin purple arc travels slowly around the card's edge once every nine seconds, so the last invitation to talk is the one thing still moving at the end of the page.",
    css: `
.m-${ID} .beam-wrap { position: relative; width: min(30rem, calc(100% - 2rem)); }
.m-${ID} .m-card { display: grid; gap: 1rem; justify-items: start; padding: 2rem; }
.m-${ID} .m-card h4 { margin: 0; font-size: 1.44rem; line-height: 1.25; }
.m-${ID} .m-card p { margin: 0; color: var(--text-secondary); }
.m-${ID} .m-card .m-button { margin-top: 0.5rem; }
.m-${ID} .rim {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  border-radius: 1.5rem;
  corner-shape: squircle;
  padding: ${THICKNESS}px;
  -webkit-mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000, #000) content-box exclude, linear-gradient(#000, #000);
}
.m-${ID} .beam {
  position: absolute;
  inset: -75%;
  display: block;
  transform-origin: 50% 50%;
  background: conic-gradient(from 0deg at 50% 50%,
    transparent 0deg,
    transparent ${360 - SIZE}deg,
    color-mix(in srgb, var(--text-brand) 55%, transparent) ${360 - 0.35 * SIZE}deg,
    var(--text-brand) 360deg);
}
`,
    mount(stage) {
      const wrap = M.el("div", "beam-wrap");
      const card = M.el("div", "m-card");
      const button = M.el("button", "m-button", "Let's Talk");
      button.type = "button";
      card.append(
        M.el("h4", "m-title", "What does a good outcome look like for you?"),
        M.el("p", "", "Thirty minutes, free, with whoever sits closest to the problem."),
        button,
      );
      const rim = M.el("div", "rim");
      rim.setAttribute("aria-hidden", "true");
      const beam = M.el("span", "beam");
      rim.append(beam);
      wrap.append(card, rim);
      stage.append(wrap);

      let animation = null;
      function start() {
        if (animation) animation.cancel();
        animation = null;
        if (M.reduced()) return;
        animation = beam.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], {
          duration: DURATION * 1000,
          easing: "linear",
          iterations: Infinity,
          fill: "both",
        });
      }
      start();
      return { play: start };
    },
  });
})();
