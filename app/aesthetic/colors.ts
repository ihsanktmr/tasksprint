const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    main: "#5A4FCF",
    blue: "#018FE4",
    transparentBackground: "rgba(255, 255, 255, 0.75)",
    border: "#D0D5DD",
    shadow: "rgba(0, 0, 0, 0.1)",
    error: "#D32F2F",
    success: "#388E3C",
    warning: "#FBC02D",
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    main: "#A5C9FF",
    blue: "#40A6E3",
    transparentBackground: "rgba(21, 23, 24, 0.75)",
    border: "#30363D",
    shadow: "rgba(0, 0, 0, 0.5)",
    error: "#CF6679",
    success: "#4CAF50",
    warning: "#FFA000",
  },
} as const;

export type ColorScheme = keyof typeof Colors;
export type ColorModes = keyof typeof Colors.light;
