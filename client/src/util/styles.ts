import { Theme } from "@material-ui/core";

// Not exported in @material-ui
export type PaletteColor = Theme["palette"]["primary"];

export const linearGradient = (
  palette: PaletteColor,
  direction: "top" | "bottom" | "left" | "right"
) => `linear-gradient(to ${direction}, ${palette.dark}, ${palette.light})`;
