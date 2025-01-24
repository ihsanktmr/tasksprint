import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CountdownTimer from "app/components/CountdownTimer";
import { Header } from "app/components/Header";
import { ThemedView } from "app/components/ThemedView";
import { useThemeColor } from "app/hooks/useThemeColor";
import { HomeScreenNavigationProp } from "app/navigation";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function TimerScreen() {
  const iconColor = useThemeColor("background");
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const insets = useSafeAreaInsets();

  const handleLeftPress = () => {
    navigation.openDrawer();
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
        leftIcon={<Ionicons name="menu" size={24} color={iconColor} />}
        onLeftPress={handleLeftPress}
      />
      <CountdownTimer />
    </ThemedView>
  );
}
