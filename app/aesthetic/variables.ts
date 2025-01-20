import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");
export const genericSpacing = width * 0.075;
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
