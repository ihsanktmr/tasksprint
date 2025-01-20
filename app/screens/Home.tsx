import React, { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Header } from "app/components/Header";
import { InternetModal } from "app/components/InternetModal";
import { ThemedView } from "app/components/ThemedView";
import { SCREEN } from "app/constants";
import { useThemeColor } from "app/hooks/useThemeColor";
import { HomeScreenNavigationProp } from "app/navigation";
import { isConnected, setupConnectivityListener } from "app/utils/netCheck";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function HomeScreen() {
  const iconColor = useThemeColor("background");
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const insets = useSafeAreaInsets();

  const [internetModalVisible, setInternetModalVisible] = useState(false);

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

  const handleLeftPress = () => {
    console.log("Left icon pressed");
  };

  const handleRightPress = () => {
    navigation.navigate(SCREEN.HOME);
  };

  return (
    <ThemedView
      style={{
        flex: 1,
        ...Platform.select({
          ios: {
            paddingTop: insets.top,
          },
          android: {
            paddingTop: 10,
          },
        }),
      }}
    >
      <Header
        title="Home"
        leftIcon={<Ionicons name="menu" size={24} color={iconColor} />}
        rightIcon={
          <Ionicons name="notifications" size={24} color={iconColor} />
        }
        onLeftPress={handleLeftPress}
        onRightPress={handleRightPress}
      />

      <InternetModal
        visible={internetModalVisible}
        onRetry={retryConnection}
        onDismiss={() => setInternetModalVisible(false)}
      />
    </ThemedView>
  );
}
