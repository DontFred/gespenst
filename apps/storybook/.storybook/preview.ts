import type { Preview } from "@storybook/react";

import "@gespenst/ui/dist/style.css";

import { withThemeByClassName } from "@storybook/addon-themes";
import { themes } from "@storybook/theming";

const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
];

const preview: Preview = {
  decorators: decorators,
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
