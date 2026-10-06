(() => {
  const ID = "topic-palette";
  const DIALOG = { stiffness: 500, damping: 35 };
  const ITEM = { stiffness: 400, damping: 30 };
  const BACKDROP_MS = 200;
  const EXIT_MS = 120;
  const TOPICS = [
    "Building software",
    "Automating repetitive work",
    "Websites and online presence",
    "Answers from your data",
    "Considered AI",
    "Training your team on their own work",
    "Ongoing support",
    "Not sure yet",
  ];
  const SEARCH =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>';
  const CLEAR =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';

  window.MOTION_DEMOS.push({
    id: ID,
    title: "Searchable topic picker",
    source: "vuecommandpalette.md",
    section: "contact",
    where: "The optional Topic field in the contact panel, in place of a plain dropdown of the seven services and Not sure yet.",
    how: "Choosing the field drops a small search window that springs down into place, narrows the topics as the visitor types, and closes quickly once a topic is picked with a click or the Enter key.",
    css: `
.m-topic-palette [hidden] { display: none !important; }
.m-topic-palette .form { display: grid; gap: 0.5rem; width: min(24rem, calc(100% - 2rem)); }
.m-topic-palette .field-label { color: var(--text-secondary); font: 500 0.7901rem/1.2 var(--font-title); }
.m-topic-palette .trigger {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 2.75rem;
  padding: 0.5rem 1.25rem;
  border: 1px solid var(--border-interactive);
  border-radius: 999px;
  corner-shape: squircle;
  background: var(--surface-page);
  color: var(--text-tertiary);
  font: 400 1rem/1.3 var(--font-body);
  text-align: left;
  cursor: pointer;
}
.m-topic-palette .trigger.chosen { color: var(--text-primary); }
.m-topic-palette .trigger:focus-visible { outline: 2px solid var(--border-focus); outline-offset: 2px; }
.m-topic-palette svg { width: 1.125rem; height: 1.125rem; flex-shrink: 0; }
.m-topic-palette .overlay { position: absolute; inset: 0; z-index: 2; display: flex; align-items: center; justify-content: center; }
.m-topic-palette .backdrop { position: absolute; inset: 0; background: oklch(0.196 0.026 280 / 0.35); }
.m-topic-palette .dialog {
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(22rem, calc(100% - 2rem));
  max-height: calc(100% - 2rem);
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  border-radius: 1.5rem;
  corner-shape: squircle;
  background: var(--surface-page);
}
.m-topic-palette .search {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1.25rem;
  border-bottom: 1px solid var(--border-subtle);
  color: var(--text-tertiary);
}
.m-topic-palette .search input {
  flex: 1;
  min-width: 0;
  border: 0;
  outline: 0;
  background: none;
  color: var(--text-primary);
  font: 400 1rem/1.3 var(--font-body);
}
.m-topic-palette .clear {
  display: grid;
  place-items: center;
  padding: 0.25rem;
  border: 0;
  border-radius: 999px;
  background: none;
  color: var(--text-tertiary);
  cursor: pointer;
}
.m-topic-palette .list { flex: 1; min-height: 0; max-height: 13rem; overflow-y: auto; padding: 0.5rem; }
.m-topic-palette .group { padding: 0.5rem 0.75rem 0.375rem; color: var(--text-tertiary); font: 500 0.7023rem/1.2 var(--font-title); }
.m-topic-palette .item {
  position: relative;
  padding: 0.5rem 0.75rem;
  border-radius: 999px;
  color: var(--text-primary);
  font: 400 0.9375rem/1.35 var(--font-body);
  cursor: pointer;
}
.m-topic-palette .item span { position: relative; }
.m-topic-palette .highlight { position: absolute; inset: 0; border-radius: inherit; background: var(--surface-brand); }
.m-topic-palette .empty { padding: 1rem 0.75rem; color: var(--text-secondary); font-size: 0.9375rem; }
.m-topic-palette .footer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem 1rem;
  padding: 0.625rem 1.25rem;
  border-top: 1px solid var(--border-subtle);
  color: var(--text-tertiary);
  font-size: 0.8125rem;
}
.m-topic-palette kbd {
  margin-right: 0.25rem;
  padding: 0.0625rem 0.375rem;
  border-radius: 0.375rem;
  background: var(--surface-raised);
  font: 500 0.7023rem/1.4 var(--font-title);
}
`,
    mount(stage) {
      const form = M.el("div", "form");
      const label = M.el("span", "field-label", "Topic (optional)");
      label.id = `${ID}-label`;
      const trigger = M.el("button", "trigger");
      trigger.type = "button";
      trigger.setAttribute("aria-labelledby", label.id);
      trigger.setAttribute("aria-haspopup", "dialog");
      trigger.innerHTML = SEARCH;
      const triggerText = M.el("span", "", "Choose a topic");
      trigger.append(triggerText);
      form.append(label, trigger);

      const overlay = M.el("div", "overlay");
      overlay.hidden = true;
      const backdrop = M.el("div", "backdrop");
      const dialog = M.el("div", "dialog");
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-label", "Choose a topic");
      const search = M.el("label", "search");
      search.innerHTML = SEARCH;
      const input = M.el("input");
      input.type = "text";
      input.placeholder = "Search topics";
      input.setAttribute("aria-label", "Search topics");
      const clear = M.el("button", "clear");
      clear.type = "button";
      clear.setAttribute("aria-label", "Clear the search");
      clear.innerHTML = CLEAR;
      clear.hidden = true;
      search.append(input, clear);

      const list = M.el("div", "list");
      list.setAttribute("role", "listbox");
      list.append(M.el("div", "group", "Topics"));
      const empty = M.el("p", "empty", "No topic matches that.");
      empty.hidden = true;
      const highlight = M.el("div", "highlight");
      const items = TOPICS.map((topic) => {
        const node = M.el("div", "item");
        node.setAttribute("role", "option");
        node.append(M.el("span", "", topic));
        list.append(node);
        const item = { topic, node, shown: true };
        item.fade = M.spring(ITEM, (p) => { node.style.opacity = Math.min(1, p); });
        node.addEventListener("mouseenter", () => select(item));
        node.addEventListener("click", () => choose(item));
        return item;
      });
      list.append(empty);

      const footer = M.el("div", "footer");
      footer.innerHTML =
        "<span><kbd>↑↓</kbd>Navigate</span><span><kbd>↵</kbd>Select</span><span><kbd>Esc</kbd>Close</span>";
      dialog.append(search, list, footer);
      overlay.append(backdrop, dialog);
      stage.append(form, overlay);

      let isOpen = false;
      let selected = null;
      let script = 0;

      const pose = M.spring(DIALOG, (p) => {
        dialog.style.opacity = Math.min(1, p);
        dialog.style.transform = `translateY(${-16 * (1 - p)}px) scale(${0.96 + 0.04 * p})`;
      });

      const visible = () => items.filter((item) => item.shown);

      function select(item, scroll) {
        selected = item;
        items.forEach((each) => each.node.setAttribute("aria-selected", String(each === item)));
        if (!item) return highlight.remove();
        item.node.prepend(highlight);
        if (scroll) item.node.scrollIntoView({ block: "nearest" });
      }

      function filter() {
        const query = input.value.trim().toLowerCase();
        clear.hidden = !query;
        items.forEach((item) => {
          const match = item.topic.toLowerCase().includes(query);
          if (match === item.shown) return;
          item.shown = match;
          if (match) {
            item.node.hidden = false;
            item.fade.to(1);
          } else {
            item.fade.to(0, () => { item.node.hidden = true; });
          }
        });
        const rest = visible();
        empty.hidden = rest.length > 0;
        select(rest[0] || null);
      }

      function fadeOverlay(node, keyframes, duration) {
        if (M.reduced()) return Promise.resolve();
        return node.animate(keyframes, { duration, easing: M.easeOut, fill: "forwards" }).finished.catch(() => {});
      }

      function open() {
        if (isOpen) return;
        isOpen = true;
        overlay.hidden = false;
        dialog.getAnimations().forEach((animation) => animation.cancel());
        backdrop.getAnimations().forEach((animation) => animation.cancel());
        input.value = "";
        items.forEach((item) => {
          item.shown = true;
          item.node.hidden = false;
          item.fade.set(0);
          item.fade.to(1);
        });
        empty.hidden = true;
        clear.hidden = true;
        select(items[0]);
        list.scrollTop = 0;
        fadeOverlay(backdrop, [{ opacity: 0 }, { opacity: 1 }], BACKDROP_MS);
        pose.set(0);
        pose.to(1);
        input.focus({ preventScroll: true });
      }

      async function close() {
        if (!isOpen) return;
        isOpen = false;
        const { opacity, transform } = getComputedStyle(dialog);
        pose.set(1);
        const exit = fadeOverlay(
          dialog,
          [
            { opacity, transform },
            { opacity: 0, transform: "translateY(-8px) scale(0.98)" },
          ],
          EXIT_MS,
        );
        await Promise.all([exit, fadeOverlay(backdrop, [{ opacity: 1 }, { opacity: 0 }], BACKDROP_MS)]);
        if (!isOpen) overlay.hidden = true;
      }

      function choose(item) {
        if (!item) return;
        triggerText.textContent = item.topic;
        trigger.classList.add("chosen");
        close();
        trigger.focus({ preventScroll: true });
      }

      function step(direction) {
        const rest = visible();
        const index = rest.indexOf(selected) + direction;
        select(rest[Math.max(0, Math.min(rest.length - 1, index))], true);
      }

      function onKey(event) {
        if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          isOpen ? close() : open();
        } else if (!isOpen) {
          return;
        } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          step(event.key === "ArrowDown" ? 1 : -1);
        } else if (event.key === "Enter") {
          event.preventDefault();
          choose(selected);
        } else if (event.key === "Escape") {
          event.preventDefault();
          close();
        }
      }

      trigger.addEventListener("click", open);
      backdrop.addEventListener("click", close);
      input.addEventListener("input", filter);
      clear.addEventListener("click", () => {
        input.value = "";
        filter();
        input.focus({ preventScroll: true });
      });
      stage.addEventListener("keydown", onKey);

      function reset() {
        isOpen = false;
        overlay.hidden = true;
        triggerText.textContent = "Choose a topic";
        trigger.classList.remove("chosen");
      }

      return {
        async play() {
          const run = ++script;
          reset();
          const live = () => run === script;
          await M.wait(400);
          if (!live()) return;
          open();
          for (const letter of "work") {
            await M.wait(260);
            if (!live()) return;
            input.value += letter;
            filter();
          }
          await M.wait(700);
          if (!live()) return;
          step(1);
          await M.wait(700);
          if (live()) choose(selected);
        },
      };
    },
  });
})();
