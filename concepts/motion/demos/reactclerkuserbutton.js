/* Clerk user button, adapted: the header's Menu capsule morphs into the menu
   window by scale from its top-left corner, the "Menu" label glides into the
   window's corner at its true size, and the links fade in from a blur. */
(() => {
  const SPRING = { ...M.springConfig({ visualDuration: 0.25, bounce: 0.15 }), rest: 0.0005, restSpeed: 0.01 };
  const LINKS = ["The problem", "What we do", "The team", "Let's talk"];
  const OPEN_RADIUS = 24;
  const FADE = { duration: 300, easing: M.easeOut, fill: "both" };

  window.MOTION_DEMOS.push({
    id: "clerk-user-button",
    title: "Menu capsule morph",
    source: "reactclerkuserbutton.md",
    section: "header",
    where: "The Menu button at the left of the header, and the framed menu window it opens.",
    how: "Pressing Menu grows the capsule down and to the right into the window while the word Menu glides into its corner, then the links and the English / 中文 toggle sharpen in, and the same motion runs backward to close.",
    css: `
      .m-clerk-user-button .bar {
        position: absolute;
        top: 1.5rem;
        left: 1.5rem;
        right: 1.5rem;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
      }
      .m-clerk-user-button .bar .logo {
        height: 1.25rem;
        margin: 0;
      }
      .m-clerk-user-button .bar .m-button {
        justify-self: end;
      }
      .m-clerk-user-button .root {
        position: relative;
        width: var(--closed-width, 6rem);
        height: 2.75rem;
        z-index: 2;
      }
      .m-clerk-user-button .shape {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-flex;
        align-items: center;
        height: 2.75rem;
        padding: 0 1.5rem;
        border: 1px solid var(--border-interactive);
        border-radius: 999px;
        background: var(--surface-page);
        color: var(--text-primary);
        font: 600 0.8889rem/1 var(--font-title);
        cursor: pointer;
        transform-origin: 0 0;
        will-change: transform;
        overflow: hidden;
      }
      .m-clerk-user-button .shape:focus-visible {
        outline: 2px solid var(--border-focus);
        outline-offset: 2px;
      }
      .m-clerk-user-button .label {
        display: block;
        transform-origin: 0 0;
      }
      .m-clerk-user-button .content {
        display: none;
      }
      .m-clerk-user-button .shape.open {
        display: block;
        width: 16rem;
        height: auto;
        padding: 1.25rem 1.5rem 1.5rem;
        border-color: var(--border-subtle);
        border-radius: ${OPEN_RADIUS}px;
        cursor: default;
      }
      .m-clerk-user-button .shape.open .label {
        display: inline-block;
        color: var(--text-tertiary);
      }
      .m-clerk-user-button .shape.open .content {
        display: block;
      }
      .m-clerk-user-button .links {
        display: grid;
        gap: 0.75rem;
        margin: 1.25rem 0 1.5rem;
      }
      .m-clerk-user-button .links button {
        padding: 0;
        border: 0;
        background: none;
        color: var(--text-primary);
        font: 700 1.2rem/1.2 var(--font-title);
        letter-spacing: -0.02em;
        text-align: left;
        cursor: pointer;
      }
      .m-clerk-user-button .links button:hover {
        color: var(--text-brand);
      }
      .m-clerk-user-button .language {
        margin: 0;
        padding-top: 1rem;
        border-top: 1px solid var(--border-subtle);
        color: var(--text-secondary);
        font: 400 0.8889rem/1.5 var(--font-body);
      }
    `,
    mount(stage) {
      const bar = M.el("div", "bar");
      const root = M.el("div", "root");
      const shape = M.el("div", "shape");
      shape.tabIndex = 0;
      shape.setAttribute("role", "button");
      shape.setAttribute("aria-expanded", "false");
      const label = M.el("span", "label", "Menu");
      const content = M.el("div", "content");
      const links = M.el("div", "links");
      for (const text of LINKS) {
        const link = M.el("button", "", text);
        link.type = "button";
        links.append(link);
      }
      content.append(links, M.el("p", "language", "English / 中文"));
      shape.append(label, content);
      root.append(shape);

      const pageLogo = document.querySelector(".page > a .logo");
      const logo = pageLogo ? pageLogo.cloneNode(true) : M.el("span", "m-title", "hurulab");
      const talk = M.el("button", "m-button", "Let's Talk");
      talk.type = "button";
      bar.append(root, logo, talk);
      stage.append(bar);

      let isOpen = false;
      let closed = null;
      let opened = null;

      const box = () => ({
        w: shape.offsetWidth,
        h: shape.offsetHeight,
        x: label.offsetLeft,
        y: label.offsetTop,
        r: Math.min(parseFloat(getComputedStyle(shape).borderTopLeftRadius), shape.offsetHeight / 2),
      });
      const syncRoot = () => {
        if (!opened) root.style.setProperty("--closed-width", `${shape.offsetWidth}px`);
      };
      requestAnimationFrame(syncRoot);
      if (document.fonts) document.fonts.ready.then(syncRoot);

      // p = 0 draws the closed capsule, p = 1 the open window; the window
      // layout stays in place and is scaled, like a shared layoutId.
      const morph = M.springs({ p: 0 }, SPRING, ({ p }, moving) => {
        if (!opened) return;
        const sx = M.lerp(closed.w / opened.w, 1, p);
        const sy = M.lerp(closed.h / opened.h, 1, p);
        const r = M.lerp(closed.r, OPEN_RADIUS, p);
        shape.style.transform = `scale(${sx}, ${sy})`;
        shape.style.borderRadius = `${r / sx}px / ${r / sy}px`;
        const tx = M.lerp(closed.x, opened.x, p) / sx - opened.x;
        const ty = M.lerp(closed.y, opened.y, p) / sy - opened.y;
        label.style.transform = `translate(${tx}px, ${ty}px) scale(${1 / sx}, ${1 / sy})`;
        if (!moving && !isOpen && p === 0) settleClosed();
      });

      function settleClosed() {
        shape.classList.remove("open");
        shape.style.transform = shape.style.borderRadius = label.style.transform = "";
        opened = null;
      }

      function fade(to, delay) {
        const from = getComputedStyle(content).opacity;
        content.getAnimations().forEach((animation) => animation.cancel());
        const blur = (opacity) => `blur(${8 - 8 * opacity}px)`;
        const easing = to ? FADE.easing : M.easeInOut;
        content.animate(
          [
            { opacity: from, filter: blur(Number(from)) },
            { opacity: to, filter: blur(to) },
          ],
          { ...FADE, easing, delay: M.reduced() ? 0 : delay, duration: M.reduced() ? 0 : FADE.duration },
        );
      }

      function open() {
        if (isOpen) return;
        isOpen = true;
        shape.setAttribute("aria-expanded", "true");
        if (!opened) {
          closed = box();
          syncRoot();
          shape.classList.add("open");
          opened = box();
          content.style.opacity = "0";
          morph.set({ p: 0 });
        }
        fade(1, 150);
        morph.to({ p: 1 });
      }

      function close() {
        if (!isOpen) return;
        isOpen = false;
        shape.setAttribute("aria-expanded", "false");
        fade(0, 0);
        morph.to({ p: 0 });
      }

      shape.addEventListener("click", (event) => {
        if (!isOpen) open();
        else if (event.target.closest(".links button")) close();
      });
      shape.addEventListener("keydown", (event) => {
        if (event.target === shape && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          if (isOpen) close();
          else open();
        }
      });
      window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") close();
      });
      document.addEventListener("mousedown", (event) => {
        if (isOpen && !root.contains(event.target)) close();
      });

      let run = 0;
      function reset() {
        isOpen = false;
        content.getAnimations().forEach((animation) => animation.cancel());
        content.style.opacity = "";
        morph.set({ p: 0 });
        settleClosed();
      }

      return {
        async play() {
          const id = ++run;
          reset();
          await M.wait(300);
          if (id !== run) return;
          open();
          await M.wait(2000);
          if (id !== run) return;
          close();
        },
      };
    },
  });
})();
