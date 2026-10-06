(() => {
  const ID = "risk-checklist";
  // The source leaves the reorder on Motion's default layout spring; this is that spring as measured.
  const LAYOUT = { stiffness: 700, damping: 45, rest: 0.1 };
  const RELOCATE_MS = 600;
  const RISKS = [
    "The price you paid was more than you were told.",
    "Nothing says it will meet your goal.",
    "You get something, and it isn't what you asked for.",
  ];
  const CHECK =
    '<svg viewBox="0 0 12 10" fill="none" aria-hidden="true"><path d="M1 5L4.5 8.5L11 1" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Risks crossed off one by one",
    source: "vuetodolist.md",
    section: "problem",
    where: "The three stacked risk cards under Why you hesitate before a big technology project.",
    how: "As the visitor scrolls, each risk is ticked, struck through and dimmed, then sinks below the ones still open, leaving the closing line about Discovery bringing the evidence first.",
    css: `
.m-risk-checklist .panel {
  display: grid;
  gap: 1rem;
  width: min(30rem, calc(100% - 2rem));
  padding-block: 1.5rem;
}
.m-risk-checklist .heading { margin: 0; font-size: 1.2rem; line-height: 1.3; }
.m-risk-checklist .list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.m-risk-checklist .row {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--border-subtle);
  border-radius: 1.5rem;
  corner-shape: squircle;
  background: var(--surface-page);
  touch-action: none;
  user-select: none;
  cursor: grab;
}
.m-risk-checklist .row.dragging { z-index: 1; cursor: grabbing; }
.m-risk-checklist .box {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  padding: 0;
  border: 2px solid var(--text-brand);
  border-radius: 0.375rem;
  background: transparent;
  color: var(--surface-page);
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.m-risk-checklist .box[aria-pressed="true"] { background: var(--text-brand); }
.m-risk-checklist .box:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 2px; }
.m-risk-checklist .box svg { display: block; width: 0.625rem; height: 0.5rem; }
.m-risk-checklist .text {
  color: var(--text-primary);
  font: 500 1rem/1.4 var(--font-body);
  background: linear-gradient(var(--text-brand), var(--text-brand)) no-repeat 0 55% / 0% 1.5px;
  transition:
    opacity 0.4s ${M.easeInOut},
    background-size 0.4s ${M.easeOut};
}
.m-risk-checklist .row.done .text { opacity: 0.45; background-size: 100% 1.5px; }
.m-risk-checklist .closing { margin: 0; color: var(--text-secondary); }
.m-risk-checklist .instant .box,
.m-risk-checklist .instant .text { transition: none; }
@media (prefers-reduced-motion: reduce) {
  .m-risk-checklist .box,
  .m-risk-checklist .text { transition: none; }
}
`,
    mount(stage) {
      const panel = M.el("div", "panel");
      const heading = M.el("p", "heading m-title", "Why you hesitate before a big technology project.");
      const list = M.el("ul", "list");
      const closing = M.el(
        "p",
        "closing",
        "These risks come from deciding before you have the evidence. Discovery brings you the evidence first.",
      );
      panel.append(heading, list, closing);
      stage.append(panel);

      let timers = [];
      let script = 0;
      let dragged = null;

      const rows = RISKS.map((risk) => {
        const node = M.el("li", "row");
        const box = M.el("button", "box");
        box.type = "button";
        box.setAttribute("aria-pressed", "false");
        box.setAttribute("aria-label", `Mark as handled: ${risk}`);
        const text = M.el("span", "text", risk);
        node.append(box, text);
        const row = { risk, node, box, done: false };
        row.y = M.spring(LAYOUT, (y) => { node.style.transform = y ? `translateY(${y}px)` : ""; });
        box.addEventListener("click", (event) => {
          event.stopPropagation();
          toggle(row);
        });
        box.addEventListener("pointerdown", (event) => event.stopPropagation());
        node.addEventListener("pointerdown", (event) => startDrag(row, event));
        return row;
      });
      let order = rows.slice();

      // FLIP: reorder the DOM, then spring each row from where it was to where it now sits.
      function arrange(next) {
        const before = new Map(order.map((row) => [row, row.node.offsetTop]));
        order = next;
        list.append(...order.map((row) => row.node));
        order.forEach((row) => {
          const delta = before.get(row) - row.node.offsetTop;
          if (!delta) return;
          row.y.shift(delta);
          if (row !== dragged) row.y.to(0);
        });
      }

      function toggle(row) {
        row.done = !row.done;
        row.node.classList.toggle("done", row.done);
        row.box.setAttribute("aria-pressed", String(row.done));
        row.box.innerHTML = row.done ? CHECK : "";
        if (!row.done) return;
        timers.push(
          setTimeout(() => {
            if (dragged) return;
            arrange([...order.filter((each) => !each.done), ...order.filter((each) => each.done)]);
          }, RELOCATE_MS),
        );
      }

      function startDrag(row, event) {
        if (event.button !== 0) return;
        dragged = row;
        row.node.classList.add("dragging");
        row.node.setPointerCapture(event.pointerId);
        let lastY = event.clientY;
        const move = (moveEvent) => {
          row.y.set(row.y.value + moveEvent.clientY - lastY);
          lastY = moveEvent.clientY;
          const index = order.indexOf(row);
          const center = row.node.offsetTop + row.y.value + row.node.offsetHeight / 2;
          const above = order[index - 1];
          const below = order[index + 1];
          const swap = (other) => {
            const next = order.slice();
            next.splice(index, 1);
            next.splice(next.indexOf(other) + (other === below ? 1 : 0), 0, row);
            arrange(next);
          };
          if (above && center < above.node.offsetTop + above.node.offsetHeight / 2) swap(above);
          else if (below && center > below.node.offsetTop + below.node.offsetHeight / 2) swap(below);
        };
        const end = () => {
          row.node.removeEventListener("pointermove", move);
          row.node.removeEventListener("pointerup", end);
          row.node.removeEventListener("pointercancel", end);
          row.node.classList.remove("dragging");
          dragged = null;
          row.y.to(0);
        };
        row.node.addEventListener("pointermove", move);
        row.node.addEventListener("pointerup", end);
        row.node.addEventListener("pointercancel", end);
      }

      function reset() {
        timers.forEach(clearTimeout);
        timers = [];
        panel.classList.add("instant");
        rows.forEach((row) => {
          if (row.done) toggle(row);
          row.y.set(0);
        });
        order = rows.slice();
        list.append(...order.map((row) => row.node));
        void panel.offsetWidth;
        panel.classList.remove("instant");
      }
      reset();

      return {
        async play() {
          const run = ++script;
          reset();
          for (const delay of [500, 1300, 1300]) {
            await M.wait(delay);
            if (run !== script) return;
            const next = order.find((row) => !row.done);
            if (next) toggle(next);
          }
        },
      };
    },
  });
})();
