/**
 * The single source of every specimen is storybook.html. These stories never
 * hold markup or values of their own: each one clones its section out of that
 * page, so an edit there reaches both views and there is only ever one drawing
 * of a thing to keep correct.
 */
import pageHtml from "../storybook.html?raw";

const doc = new DOMParser().parseFromString(pageHtml, "text/html");

/* The page's tail script, as source. It draws the ramps, the contrast matrix,
   the spacing table and the type ladder from the raw oklch values on load,
   which is what stops the page disagreeing with color.md. A clone of a section
   is therefore empty markup until this has run over it. */
const pageScript = [...doc.querySelectorAll("script")]
  .map((s) => s.textContent)
  .join("\n");

/* The page's script sets a repeating interval for the motion demo. Storybook
   mounts a fresh clone on every navigation, so without this the intervals pile
   up and keep firing at sections that have been unmounted. */
let liveTimers = [];
const nativeSetInterval = window.setInterval.bind(window);
const nativeSetTimeout = window.setTimeout.bind(window);

/**
 * Run the page's script over a freshly mounted section.
 *
 * It addresses elements by id and exits quietly when one is absent, so running
 * it over a single cloned section fills that section and skips the rest. It has
 * to run after the clone is in the document: it measures the root font size,
 * and it binds a click listener to the motion demo, which a detached node would
 * never receive.
 */
function runPageScript() {
  liveTimers.forEach(clearInterval);
  liveTimers.forEach(clearTimeout);
  liveTimers = [];

  /* Capture what the script schedules so the next render can cancel it. */
  window.setInterval = (...a) => {
    const t = nativeSetInterval(...a);
    liveTimers.push(t);
    return t;
  };
  window.setTimeout = (...a) => {
    const t = nativeSetTimeout(...a);
    liveTimers.push(t);
    return t;
  };

  /* The page fills its tables by id and assumes every section is present. A
     story shows one section, so the ids the others own are absent and the
     script throws on the first of them, taking everything after it down with
     it: that is why the colors drew and the spacing table and the motion
     listener did not.

     getElementById returns a harmless stand-in for an id this story does not
     have. Writing to it is discarded. Nothing else about the script changes,
     and the page itself is untouched. */
  const realGetById = document.getElementById.bind(document);
  document.getElementById = (id) => realGetById(id) || makeVoidNode();

  try {
    new Function(pageScript)();
  } catch (e) {
    console.warn("storybook.html script:", e);
  } finally {
    document.getElementById = realGetById;
    window.setInterval = nativeSetInterval;
    window.setTimeout = nativeSetTimeout;
  }
}

/** Absorbs whatever the page script does to a section this story does not show. */
function makeVoidNode() {
  const node = document.createElement("div");
  /* The script reads .children and calls .animate on what it finds; an empty
     div answers both. */
  return node;
}

export function section(id) {
  const el = doc.getElementById(id);
  if (!el) throw new Error(`storybook.html has no section #${id}`);
  return () => {
    const clone = el.cloneNode(true);
    const host = document.createElement("div");
    host.appendChild(clone);

    /* Storybook inserts the returned node itself, so the script cannot run
       until that has happened: it reads computed styles and binds a click
       listener, and a detached node gives it neither. One frame is not a
       reliable wait, because a story reached by full page load mounts later
       than one reached by navigation. Poll for the node instead. */
    const ready = () => {
      if (host.isConnected) runPageScript();
      else requestAnimationFrame(ready);
    };
    requestAnimationFrame(ready);

    return host;
  };
}

/**
 * A fresh clone of one specimen inside a section, for the playground stories:
 * controls change its words and states, never its values.
 */
export function specimen(sectionId, selector) {
  const root = doc.getElementById(sectionId);
  const el = root && root.querySelector(selector);
  if (!el) throw new Error(`storybook.html #${sectionId} has no ${selector}`);
  return el.cloneNode(true);
}

/**
 * The page's own <style> blocks: the embedded Cascadia Mono and Fustat faces, the
 * tokens, and every specimen rule.
 *
 * The page embeds its fonts so it works offline off disk, and hoisting its
 * styles here rather than importing css/tokens.css keeps one source for both
 * views. When the two disagree, the rule file wins and both get corrected.
 */
export function injectPageStyles() {
  if (document.getElementById("hl-specimen-styles")) return;

  const style = document.createElement("style");
  style.id = "hl-specimen-styles";

  let css = "";
  doc.querySelectorAll("style").forEach((s) => {
    css += s.textContent + "\n";
  });

  /* The page lays out a sticky sidebar beside a column of sections; a story
     shows one section on its own. */
  css += "section{border-top:none;padding:var(--s-5) var(--s-7) var(--s-8);}\n";

  style.textContent = css;
  document.head.appendChild(style);
}
