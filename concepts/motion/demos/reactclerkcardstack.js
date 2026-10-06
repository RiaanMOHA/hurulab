/* Clerk card stack, adapted: the three risk cards in the problem section
   spring up onto a stack, and each card behind recedes as the next lands. */
(() => {
  const CARDS = [
    "The price you paid was more than you were told.",
    "Nothing says it will meet your goal.",
    "You get something, and it isn't what you asked for.",
  ];
  const CLOSING =
    "These risks come from deciding before you have the evidence. Discovery brings you the evidence first.";
  const SPRING = M.springConfig({ visualDuration: 0.4, bounce: 0.3 });
  const HIDDEN = { opacity: 0, scale: 1, y: 100 };

  // Depth 0 is the front card; each step back repeats the source's recede.
  const atDepth = (depth) => ({
    opacity: Math.pow(0.6, depth),
    scale: Math.pow(0.95, depth),
    y: -10 * depth,
  });

  window.MOTION_DEMOS.push({
    id: "clerk-card-stack",
    title: "Stacking risk cards",
    source: "reactclerkcardstack.md",
    section: "problem",
    where: "The three stacked cards under the problem headline, \"Why you hesitate before a big technology project.\"",
    how: "Each risk card springs up from below onto the stack as it scrolls into view, the cards behind it dim, shrink and lift, and the closing line follows the third card.",
    css: `
      .m-clerk-card-stack .stack {
        position: absolute;
        inset: 0;
        cursor: pointer;
      }
      .m-clerk-card-stack .stack:focus-visible {
        outline: 2px solid var(--border-focus);
        outline-offset: -4px;
        border-radius: 1rem;
      }
      .m-clerk-card-stack .card {
        position: absolute;
        top: 3rem;
        left: 50%;
        width: min(24rem, calc(100% - 3rem));
        min-height: 8rem;
        margin: 0;
        transform-origin: top center;
        will-change: transform, opacity;
      }
      .m-clerk-card-stack .card p {
        margin: 0;
        font-size: 1.2rem;
        line-height: 1.35;
      }
      .m-clerk-card-stack .closing {
        position: absolute;
        bottom: 2rem;
        left: 50%;
        width: min(24rem, calc(100% - 3rem));
        margin: 0;
        color: var(--text-secondary);
        text-align: center;
      }
    `,
    mount(stage) {
      const stack = M.el("div", "stack");
      stack.tabIndex = 0;
      stack.setAttribute("role", "button");
      stack.setAttribute("aria-label", "Show the next card");

      const cards = CARDS.map((text, index) => {
        const card = M.el("div", "card m-card");
        card.style.zIndex = String(index + 1);
        card.append(M.el("p", "m-title", text));
        stack.append(card);
        const motion = M.springs(HIDDEN, SPRING, (v) => {
          card.style.opacity = String(Math.max(0, Math.min(1, v.opacity)));
          card.style.transform = `translateX(-50%) translateY(${v.y}px) scale(${v.scale})`;
        });
        return motion.set(HIDDEN);
      });

      const closing = M.el("p", "closing", CLOSING);
      stack.append(closing);
      const closingMotion = M.springs({ opacity: 0, y: 10 }, SPRING, (v) => {
        closing.style.opacity = String(Math.max(0, Math.min(1, v.opacity)));
        closing.style.transform = `translateX(-50%) translateY(${v.y}px)`;
      }).set({ opacity: 0, y: 10 });

      stage.append(stack);

      let shown = 0;
      let timers = [];

      function show(count, instant) {
        shown = count;
        cards.forEach((motion, index) => {
          const target = index < count ? atDepth(count - 1 - index) : HIDDEN;
          if (instant) motion.set(target);
          else motion.to(target);
        });
        const closingTarget = count === CARDS.length ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 };
        if (instant) closingMotion.set(closingTarget);
        else closingMotion.to(closingTarget);
      }

      // A full stack resets, which reverses every card at once like the source's reset.
      const advance = () => show(shown < CARDS.length ? shown + 1 : 0);
      stack.addEventListener("click", advance);
      stack.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        advance();
      });
      show(CARDS.length, true);

      return {
        play() {
          timers.forEach(clearTimeout);
          timers = [];
          show(0, true);
          if (M.reduced()) return show(CARDS.length, true);
          [100, 900, 1700].forEach((delay, index) => {
            timers.push(setTimeout(() => show(index + 1), delay));
          });
        },
      };
    },
  });
})();
