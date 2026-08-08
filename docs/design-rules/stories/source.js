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

/**
 * Run the page's script against whatever is currently in the document.
 *
 * It addresses elements by id and exits quietly when one is absent, so running
 * it over a single cloned section fills that section and skips the rest. It is
 * re-run per render rather than once, because each story mounts a fresh clone
 * with the same ids.
 */
function drawInto(host) {
  document.body.appendChild(host);
  try {
    new Function(pageScript)();
  } catch (e) {
    /* A story showing one section is missing the ids the others own; the page
       script tolerates that. Anything else is worth seeing in the console. */
    console.warn("storybook.html script:", e);
  }
  host.remove();
}

export function section(id) {
  const el = doc.getElementById(id);
  if (!el) throw new Error(`storybook.html has no section #${id}`);
  return () => {
    const clone = el.cloneNode(true);
    const host = document.createElement("div");
    host.appendChild(clone);
    drawInto(host);
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
 * The page's own <style> blocks: the embedded Geist and IBM Plex faces, the
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
