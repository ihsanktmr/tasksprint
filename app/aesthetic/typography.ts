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
