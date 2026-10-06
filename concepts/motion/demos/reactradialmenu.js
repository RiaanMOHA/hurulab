/* Radial menu, adapted: a round menu button turns its plus into a cross and
   fans the menu's five links out on a 300 degree arc, 40ms apart. */
(() => {
  const ITEM_SPRING = { stiffness: 420, damping: 24 };
  // Motion's default spring for gesture scale, used where the source sets none.
  const GESTURE_SPRING = { stiffness: 500, damping: 25 };
  const STAGGER = 40;
  const START_ANGLE = -150;
  const ANGLE_SPAN = 300;
  const ITEMS = ["The problem", "What we do", "The team", "Let's talk", "English / 中文"];
  const CLOSED = { opacity: 0, scale: 0, x: 0, y: 0 };
  const PLUS =
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';

  // Hover and press scale on their own spring, composed with any other transform.
  function gestures(button, hover, tap, config, draw) {
    let over = false;
    const motion = M.springs({ scale: 1 }, config, ({ scale }) => draw(scale));
    const rest = () => motion.to({ scale: over ? hover : 1 });
    button.addEventListener("pointerenter", () => {
      over = true;
      rest();
    });
    button.addEventListener("pointerleave", () => {
      over = false;
      rest();
    });
    button.addEventListener("pointerdown", () => motion.to({ scale: tap }));
    button.addEventListener("pointerup", rest);
    button.addEventListener("pointercancel", rest);
    return motion;
  }

  window.MOTION_DEMOS.push({
    id: "radial-menu",
    title: "Radial menu",
    source: "reactradialmenu.md",
    section: "header",
    where: "The Menu button in the header, as an alternative to the framed menu window.",
    how: "Pressing the round button turns its plus into a cross while The problem, What we do, The team, Let's talk and English / 中文 spring out around it one after another, and pressing again draws them back in the same order.",
    css: `
      .m-radial-menu .anchor {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
      }
      .m-radial-menu .wrap {
        position: absolute;
        top: 0;
        left: 0;
        will-change: transform, opacity;
      }
      .m-radial-menu .item {
        will-change: transform;
      }
      .m-radial-menu .compact .item {
        min-height: 2.25rem;
        padding: 0.375rem 0.875rem;
        font-size: 0.7023rem;
      }
      .m-radial-menu .item.border {
        background: var(--surface-page);
      }
      .m-radial-menu .item:focus-visible,
      .m-radial-menu .center:focus-visible {
        outline: 2px solid var(--border-focus);
        outline-offset: 2px;
      }
      .m-radial-menu .center {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        display: grid;
        place-items: center;
        width: 3.25rem;
        height: 3.25rem;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: var(--surface-brand);
        color: var(--text-on-brand);
        cursor: pointer;
        will-change: transform;
      }
      .m-radial-menu .center:hover {
        background: var(--surface-brand-hover);
      }
    `,
    mount(stage) {
      const anchor = M.el("div", "anchor");
      let isOpen = false;
      let radius = 150;
      let timers = [];

      const items = ITEMS.map((text, index) => {
        const wrap = M.el("div", "wrap");
        const item = M.el("button", text === "Let's talk" ? "item m-button" : "item m-button border", text);
        item.type = "button";
        item.tabIndex = -1;
        wrap.append(item);
        anchor.append(wrap);
        const motion = M.springs(CLOSED, ITEM_SPRING, (v, moving) => {
          wrap.style.opacity = String(Math.max(0, Math.min(1, v.opacity)));
          wrap.style.transform = `translate(-50%, -50%) translate(${v.x}px, ${v.y}px) scale(${Math.max(0, v.scale)})`;
          wrap.style.visibility = !moving && !isOpen && v.opacity === 0 ? "hidden" : "visible";
        });
        gestures(item, 1.2, 0.9, GESTURE_SPRING, (scale) => {
          item.style.transform = `scale(${scale})`;
        });
        item.addEventListener("click", () => toggle(false));
        return { index, item, motion: motion.set(CLOSED) };
      });

      const center = M.el("button", "center");
      center.type = "button";
      center.innerHTML = PLUS;
      center.setAttribute("aria-label", "Open menu");
      center.setAttribute("aria-expanded", "false");
      anchor.append(center);
      stage.append(anchor);

      let rotate = 0;
      let press = 1;
      const drawCenter = () => {
        center.style.transform = `translate(-50%, -50%) rotate(${rotate}deg) scale(${press})`;
      };
      const spin = M.springs({ rotate: 0 }, ITEM_SPRING, (v) => {
        rotate = v.rotate;
        drawCenter();
      });
      gestures(center, 1.05, 0.92, ITEM_SPRING, (scale) => {
        press = scale;
        drawCenter();
      });
      drawCenter();

      // Fit the arc inside the stage: the widest link must clear both sides.
      function fit() {
        anchor.classList.toggle("compact", stage.clientWidth < 560);
        const widest = Math.max(...items.map(({ item }) => item.offsetWidth));
        const room = (stage.clientWidth - widest - 16) / 1.9;
        radius = Math.max(70, Math.min(150, room));
      }

      // Every item uses the same index-order delay to open and to close.
      function toggle(open) {
        if (open === isOpen) return;
        isOpen = open;
        if (open) fit();
        timers.forEach(clearTimeout);
        timers = [];
        center.setAttribute("aria-expanded", String(open));
        center.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        spin.to({ rotate: open ? 45 : 0 });
        for (const { index, item, motion } of items) {
          const angle = ((START_ANGLE + (index / (items.length - 1)) * ANGLE_SPAN) * Math.PI) / 180;
          const target = open
            ? { opacity: 1, scale: 1, x: Math.cos(angle) * radius, y: Math.sin(angle) * radius }
            : CLOSED;
          item.tabIndex = open ? 0 : -1;
          const start = () => motion.to(target);
          if (M.reduced()) start();
          else timers.push(setTimeout(start, index * STAGGER));
        }
      }

      center.addEventListener("click", () => toggle(!isOpen));

      let run = 0;
      return {
        async play() {
          const id = ++run;
          timers.forEach(clearTimeout);
          isOpen = false;
          spin.set({ rotate: 0 });
          items.forEach(({ motion }) => motion.set(CLOSED));
          await M.wait(300);
          if (id !== run) return;
          toggle(true);
          await M.wait(1800);
          if (id !== run) return;
          toggle(false);
        },
      };
    },
  });
})();
