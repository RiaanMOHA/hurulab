import { injectPageStyles } from "../docs/design-rules/stories/source.js";

injectPageStyles();

/**
 * The project's own four breakpoints, not Storybook's device list
 * (breakpoints.md 1). Each is the width the rule names, so what the toolbar
 * shows is the screen the rule describes.
 *
 * Desktop is the default because it is the design target: "1440 is where you
 * design. 360 is where you prove it."
 */
const viewports = {
  mobile: {
    name: "Mobile, the floor (360)",
    styles: { width: "360px", height: "780px" },
    type: "mobile",
  },
  tablet: {
    name: "Tablet (768)",
    styles: { width: "768px", height: "1024px" },
    type: "tablet",
  },
  desktop: {
    name: "Desktop, the design target (1440)",
    styles: { width: "1440px", height: "900px" },
    type: "desktop",
  },
  desktopLarge: {
    name: "Desktop large, the ceiling (1560)",
    styles: { width: "1560px", height: "980px" },
    type: "desktop",
  },
};

/** @type {import('@storybook/html-vite').Preview} */
export default {
  parameters: {
    layout: "fullscreen",
    viewport: { options: viewports, defaultViewport: "desktop" },
    a11y: {
      /* Report, never fail a story. The 44px floor and the contrast ratios are
         owned by breakpoints.md and color.md; this surfaces them, the owner
         rules on them. */
      test: "todo",
    },
    options: {
      storySort: {
        order: ["Introduction", "Foundations", "Components", "Patterns", "Checks"],
      },
    },
  },
};
