import React, { useEffect } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { LogBox, View, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { customFontsToLoad } from "./aesthetic/typography";
import { Providers } from "./components/Providers";
import { AppNavigator } from "./navigation";

// Prevent the splash screen from hiding prematurely
SplashScreen.preventAutoHideAsync();
LogBox.ignoreAllLogs();

export default function App() {
  const [loaded] = useFonts(customFontsToLoad);
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

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
      <View
        style={{
          flex: 1,
          marginTop: -insets.top,
          marginBottom: -insets.bottom,
        }}
      >
        <AppNavigator />
      </View>
      <StatusBar style={colorScheme === "dark" ? "dark" : "light"} />
    </Providers>
  );
}
