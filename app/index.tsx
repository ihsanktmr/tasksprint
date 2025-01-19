import React, { useEffect } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { LogBox, useColorScheme } from "react-native";

import { customFontsToLoad } from "./aesthetic/typography";
import { Providers } from "./components/common/Providers";
import { AppNavigator } from "./navigation";

// Prevent the splash screen from hiding prematurely
SplashScreen.preventAutoHideAsync();
LogBox.ignoreAllLogs();

export default function App() {
  const [loaded] = useFonts(customFontsToLoad);
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (loaded) {
      setTimeout(() => SplashScreen.hideAsync(), 2000);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Providers>
      <AppNavigator />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </Providers>
  );
}
