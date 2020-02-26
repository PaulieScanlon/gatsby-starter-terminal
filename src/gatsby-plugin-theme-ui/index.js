import codeTheme from "@theme-ui/prism/presets/vs-dark.json";
import baseTheme from "@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui";

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: "#FF4081",
    secondary: "#03A9F4",
    success: "#FFEB3B",
    background: "#232323",
    surface: "#393939"
  },
  styles: {
    ...baseTheme.styles,
    pre: {
      ...baseTheme.styles.pre,
      ...codeTheme
    }
  }
};
