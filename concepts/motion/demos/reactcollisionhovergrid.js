(() => {
  const ID = "collision-grid";
  const COLUMNS = 20;
  const GAP = 1;
  const REST = 0.12;
  const FADE = { duration: 584, easing: M.easeOut };

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Pointer light grid",
    source: "reactcollisionhovergrid.md",
    section: "closing",
    where: "Behind the closing question, \"What does a good outcome look like for you?\", above the large hurulab wordmark.",
    how: "Every square the pointer crosses lights up at once and fades back over about half a second, so the last screen of the page answers the visitor's hand on the way to the Let's Talk button.",
    css: `
.stage.m-${ID} { display: block; place-items: normal; touch-action: pan-y; }
.m-${ID} .grid { position: absolute; inset: 0; display: grid; gap: ${GAP}px; align-content: start; }
.m-${ID} .cell { aspect-ratio: 1; background: var(--surface-brand); opacity: ${REST}; }
.m-${ID} .overlay { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 1.5rem; min-height: 24rem; padding: 2rem 1.5rem; text-align: center; pointer-events: none; }
.m-${ID} .overlay h4 { margin: 0; max-width: 18em; font: 700 clamp(1.728rem, 1.5rem + 1.1vw, 2.488rem)/1.2 var(--font-title); letter-spacing: -0.02em; }
.m-${ID} .overlay h4 span { color: var(--text-brand); }
.m-${ID} .overlay p { margin: 0; color: var(--text-secondary); }
.m-${ID} .overlay .m-button { pointer-events: auto; }
.m-${ID} .overlay .m-button:hover { background: var(--surface-brand-hover); }
`,
    mount(stage) {
      const grid = M.el("div", "grid");
      grid.setAttribute("aria-hidden", "true");
      const overlay = M.el("div", "overlay");
      const heading = M.el("h4");
      heading.append("What does a good ", M.el("span", "", "outcome"), " look like for you?");
      const talk = M.el("button", "m-button", "Let's Talk");
      talk.type = "button";
      overlay.append(heading, M.el("p", "", "Thirty minutes, free, with whoever sits closest to the problem."), talk);
      stage.append(grid, overlay);

      let cells = [];
      let rows = 0;
      let pitch = 0;
      function build() {
        pitch = (stage.clientWidth + GAP) / COLUMNS;
        const nextRows = Math.ceil((stage.clientHeight + GAP) / pitch);
        if (nextRows === rows && cells.length) return;
        rows = nextRows;
        grid.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`;
        grid.replaceChildren();
        cells = [];
        for (let i = 0; i < COLUMNS * rows; i++) {
          const cell = M.el("div", "cell");
          grid.append(cell);
          cells.push({ el: cell, anim: null });
        }
      }

      // Instant set to full, then the measured 584 ms ease-out back to rest; a re-hit restarts it.
      function light(col, row) {
        if (col < 0 || row < 0 || col >= COLUMNS || row >= rows) return;
        const cell = cells[row * COLUMNS + col];
        if (cell.anim) cell.anim.cancel();
        cell.anim = cell.el.animate([{ opacity: 1 }, { opacity: REST }], {
          duration: FADE.duration,
          easing: M.reduced() ? "steps(1, end)" : FADE.easing,
        });
      }

      // Swept collision: walk every cell the segment from the last point to this one passes through.
      function sweep(x0, y0, x1, y1) {
        let col = Math.floor(x0 / pitch);
        let row = Math.floor(y0 / pitch);
        const endCol = Math.floor(x1 / pitch);
        const endRow = Math.floor(y1 / pitch);
        const dx = x1 - x0;
        const dy = y1 - y0;
        const stepX = Math.sign(dx);
        const stepY = Math.sign(dy);
        const tDeltaX = stepX ? pitch / Math.abs(dx) : Infinity;
        const tDeltaY = stepY ? pitch / Math.abs(dy) : Infinity;
        let tMaxX = stepX ? ((stepX > 0 ? (col + 1) * pitch - x0 : x0 - col * pitch) / Math.abs(dx)) : Infinity;
        let tMaxY = stepY ? ((stepY > 0 ? (row + 1) * pitch - y0 : y0 - row * pitch) / Math.abs(dy)) : Infinity;
        light(col, row);
        let guard = COLUMNS + rows + 2;
        while ((col !== endCol || row !== endRow) && guard-- > 0) {
          if (tMaxX < tMaxY) {
            col += stepX;
            tMaxX += tDeltaX;
          } else {
            row += stepY;
            tMaxY += tDeltaY;
          }
          light(col, row);
        }
      }

      let previous = null;
      let pending = null;
      let raf = 0;
      function flush() {
        raf = 0;
        if (!pending) return;
        const from = previous || pending;
        sweep(from.x, from.y, pending.x, pending.y);
        previous = pending;
        pending = null;
      }
      function feed(x, y) {
        pending = { x, y };
        if (!raf) raf = requestAnimationFrame(flush);
      }
      stage.addEventListener("pointermove", (e) => {
        const box = stage.getBoundingClientRect();
        feed(e.clientX - box.left, e.clientY - box.top);
      });
      stage.addEventListener("pointerleave", () => {
        previous = null;
      });

      new ResizeObserver(build).observe(stage);
      build();

      let run = 0;
      return {
        async play() {
          const token = ++run;
          cells.forEach((cell) => cell.anim && cell.anim.cancel());
          previous = null;
          const w = stage.clientWidth;
          const h = stage.clientHeight;
          // A slow wave across the grid, then two fast flicks that each jump corner to corner in one frame.
          const path = (t) => ({ x: w * (0.04 + 0.92 * t), y: h * (0.5 + 0.32 * Math.sin(t * Math.PI * 3)) });
          const start = performance.now();
          const wave = 1600;
          await new Promise((resolve) => {
            const frame = (now) => {
              if (token !== run) return resolve();
              const t = Math.min(1, (now - start) / wave);
              const p = path(t);
              feed(p.x, p.y);
              if (t < 1) requestAnimationFrame(frame);
              else resolve();
            };
            requestAnimationFrame(frame);
          });
          for (const [a, b] of [
            [[w * 0.95, h * 0.06], [w * 0.05, h * 0.94]],
            [[w * 0.05, h * 0.06], [w * 0.95, h * 0.94]],
          ]) {
            await M.wait(350);
            if (token !== run) return;
            previous = null;
            sweep(a[0], a[1], b[0], b[1]);
          }
          previous = null;
        },
      };
    },
  });
})();
