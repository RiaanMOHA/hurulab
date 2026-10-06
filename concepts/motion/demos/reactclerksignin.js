/* Clerk sign-in, adapted: its heading swap, a blur-and-slide crossfade, drives
   the hero's changing phrase. The slot's width springs to the new phrase. */
(() => {
  const SPRING = M.springConfig({ visualDuration: 0.4, bounce: 0.3 });
  const PHRASES = [
    "monthly reports",
    "online marketing",
    "morning brief",
    "product catalog",
    "competitor research",
    "staff scheduling",
    "contract review",
  ];
  // The source slides 10px against a 24px title line; keep that ratio.
  const SLIDE = 10 / 24;
  const BLUR = 10;

  window.MOTION_DEMOS.push({
    id: "clerk-sign-in",
    title: "Blurred phrase swap",
    source: "reactclerksignin.md",
    section: "hero",
    where: "The changing phrase in the hero headline, \"Your monthly reports, handled.\"",
    how: "Every couple of seconds the phrase blurs and drops away while the next one sharpens in from above, and the words around it spring to the new width.",
    css: `
      .m-clerk-sign-in .hero {
        container-type: inline-size;
        width: 100%;
        padding: 2rem 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }
      .m-clerk-sign-in .headline {
        margin: 0;
        font-size: clamp(1.25rem, 4.2cqi, 2.6rem);
        line-height: 1.2;
        text-align: center;
        cursor: pointer;
      }
      .m-clerk-sign-in .headline:focus-visible {
        outline: 2px solid var(--border-focus);
        outline-offset: 0.5rem;
        border-radius: 0.5rem;
      }
      .m-clerk-sign-in .slot {
        position: relative;
        display: inline-block;
        vertical-align: bottom;
        white-space: nowrap;
        text-align: left;
      }
      .m-clerk-sign-in .keep {
        white-space: nowrap;
      }
      .m-clerk-sign-in .phrase {
        display: inline-block;
        color: var(--text-brand);
        will-change: transform, opacity, filter;
      }
      .m-clerk-sign-in .phrase.leaving {
        position: absolute;
        top: 0;
        left: 0;
      }
    `,
    mount(stage) {
      const hero = M.el("div", "hero");
      const headline = M.el("h3", "headline m-title");
      headline.tabIndex = 0;
      headline.setAttribute("aria-live", "polite");
      const slot = M.el("span", "slot");
      const keep = M.el("span", "keep");
      keep.append(slot, ",");
      headline.append("Your ", keep, " handled.");
      const talk = M.el("button", "m-button", "Let's Talk");
      talk.type = "button";
      hero.append(headline, talk);
      stage.append(hero);

      const width = M.springs({ w: 0 }, SPRING, (v) => {
        slot.style.width = `${Math.max(0, v.w)}px`;
      });

      let index = 0;
      let current = null;

      function phrase(text) {
        const node = M.el("span", "phrase", text);
        const motion = M.springs({ opacity: 0, blur: BLUR, y: 0 }, SPRING, (v, moving) => {
          node.style.opacity = String(Math.max(0, Math.min(1, v.opacity)));
          node.style.filter = `blur(${Math.max(0, v.blur)}px)`;
          node.style.transform = `translateY(${v.y}px)`;
          if (!moving && node.classList.contains("leaving")) node.remove();
        });
        return { node, motion };
      }

      // The first phrase renders without animating, like initial={false}.
      function swap(next, instant) {
        index = next;
        const slide = SLIDE * parseFloat(getComputedStyle(headline).lineHeight);
        const entering = phrase(PHRASES[index]);
        if (current) {
          current.node.classList.add("leaving");
          if (instant) current.node.remove();
          else current.motion.to({ opacity: 0, blur: BLUR, y: slide });
        }
        slot.append(entering.node);
        const target = entering.node.offsetWidth;
        if (instant) {
          entering.motion.set({ opacity: 1, blur: 0, y: 0 });
          width.set({ w: target });
        } else {
          entering.motion.set({ opacity: 0, blur: BLUR, y: -slide }).to({ opacity: 1, blur: 0, y: 0 });
          width.to({ w: target });
        }
        current = entering;
      }

      const advance = () => swap((index + 1) % PHRASES.length);
      headline.addEventListener("click", advance);
      headline.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        advance();
      });

      let timer = 0;
      swap(0, true);
      const fit = () => width.set({ w: current.node.offsetWidth });
      requestAnimationFrame(fit);
      if (document.fonts) document.fonts.ready.then(fit);

      return {
        play() {
          clearInterval(timer);
          slot.replaceChildren();
          current = null;
          swap(0, true);
          let swaps = 0;
          timer = setInterval(() => {
            advance();
            if (++swaps === PHRASES.length) clearInterval(timer);
          }, 1800);
        },
      };
    },
  });
})();
