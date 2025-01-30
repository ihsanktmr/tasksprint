// Typography
import {
  OpenSans_700Bold as OpenSansBold,
  OpenSans_400Regular as OpenSansRegular,
  OpenSans_600SemiBold as OpenSansSemiBold,
} from "@expo-google-fonts/open-sans";
import {
  Roboto_700Bold as RobotoBold,
  Roboto_300Light as RobotoLight,
  Roboto_400Regular as RobotoRegular,
} from "@expo-google-fonts/roboto";
import { Dimensions } from "react-native";

// Common
export const { width, height } = Dimensions.get("window");
export const genericSpacing = width * 0.055;
export const genericWidth = width * 0.85;

export const iconVariants = {
  small: {
    width: 20,
    height: 20,
  },
  medium: {
    width: 24,
    height: 24,
  },
  large: {
    width: 32,
    height: 32,
  },
  extraLarge: {
    width: 40,
    height: 40,
  },
};

export const shadowProps = {
  shadowColor: "#9BA1A6",
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.35,
  shadowRadius: 8.65,
  elevation: 10,
};

// Distances
export const distances = {
  xxxxs: 2,
  xxxs: 4,
  xxs: 6,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
} as const;

export type Distance = keyof typeof distances;

// Colors
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

// Radius
export const radii = {
  none: 0,
  sm: 2,
  md: 4,
  lg: 8,
  xl: 16,
  xxl: 32,
  full: 9999,
} as const;

export type Radius = keyof typeof radii;

export const customFontsToLoad = {
  RobotoRegular,
  RobotoBold,
  RobotoLight,
  OpenSansRegular,
  OpenSansSemiBold,
  OpenSansBold,
};

const fonts = {
  roboto: {
    regular: "RobotoRegular",
    bold: "RobotoBold",
    light: "RobotoLight",
  },
  openSans: {
    regular: "OpenSansRegular",
    semiBold: "OpenSansSemiBold",
    bold: "OpenSansBold",
  },
};

const fontSizes = {
  small: 12,
  medium: 16,
  large: 20,
  extraLarge: 24,
};

export const typography = {
  fontSizes,
  primary: fonts.roboto,
  secondary: fonts.openSans,
};
