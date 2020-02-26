import codeTheme from "@theme-ui/prism/presets/night-owl-light.json";
import baseTheme from "@pauliescanlon/gatsby-theme-terminal/src/gatsby-plugin-theme-ui";

export default {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    text: "#222222",
    muted: "#666666",
    primary: "#FF4081",
    secondary: "#03A9F4",
    success: "#FFEB3B",
    background: "#ffffff",
    surface: "#f3f3f3"
  },
  styles: {
    ...baseTheme.styles,
    p: {
      code: {
        ...baseTheme.styles.p.code,
        color: "inherit"
      }
    },
    pre: {
      ...baseTheme.styles.pre,
      ...codeTheme
    }
  }
};
