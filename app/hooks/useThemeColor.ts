import { Colors } from "app/constants/theme";
import { selectTheme } from "app/state/theme/selectors";
import { useSelector } from "react-redux";

type ThemeKey = keyof (typeof Colors)["light"]; // Key from the Colors object

export function useThemeColor(colorKey: ThemeKey): string {
  const theme = useSelector(selectTheme); // Get the current theme from Redux
  return Colors[theme][colorKey]; // Return the color based on the theme and key
}
