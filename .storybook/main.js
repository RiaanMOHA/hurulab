/** @type {import('@storybook/html-vite').StorybookConfig} */
export default {
  framework: "@storybook/html-vite",
  stories: ["../docs/design-rules/stories/**/*.stories.js"],
  /* Controls and viewports ship in the core in Storybook 10. addon-docs renders
     the code snippet and the per-component docs page; addon-a11y runs axe over
     each specimen, which is what checks the 44px tap floor in breakpoints.md 5
     and the contrast floors in color.md 7. */
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  /* Storybook's own onboarding checklist is not part of this design system. */
  core: { disableWhatsNewNotifications: true },
};
