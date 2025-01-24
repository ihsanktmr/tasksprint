import React, { useEffect, useState } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { LogBox, View, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { InternetModal } from "./components/InternetModal";
import { Providers } from "./components/Providers";
import { customFontsToLoad } from "./constants/theme";
import { AppNavigator } from "./navigation";
import { isConnected, setupConnectivityListener } from "./utils/netCheck";

// Prevent the splash screen from hiding prematurely
SplashScreen.preventAutoHideAsync();
LogBox.ignoreAllLogs();

export default function App() {
  const [internetModalVisible, setInternetModalVisible] = useState(false);

  const [loaded] = useFonts(customFontsToLoad);
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  // Effects
  useEffect(() => {
    const unsubscribe = setupConnectivityListener((connected) => {
      setInternetModalVisible(!connected);
    });
    return unsubscribe;
  }, []);

  // Handlers
  const retryConnection = async () => {
    try {
      await isConnected();
      setInternetModalVisible(false);
    } catch {
      setInternetModalVisible(true);
    }
  };

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
      <InternetModal
        visible={internetModalVisible}
        onRetry={retryConnection}
        onDismiss={() => setInternetModalVisible(false)}
      />
    </Providers>
  );
}
