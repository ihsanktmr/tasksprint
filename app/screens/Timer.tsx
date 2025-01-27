import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CountdownTimer from "app/components/CountdownTimer";
import { Header } from "app/components/Header";
import ProgressBarWithLabel from "app/components/ProgressBarWithLabel";
import { ThemedView } from "app/components/ThemedView";
import { useThemeColor } from "app/hooks/useThemeColor";
import { HomeScreenNavigationProp } from "app/navigation";
import { Button, Platform, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function TimerScreen() {
  const iconColor = useThemeColor("background");
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [progress, setProgress] = useState<number>(0.3); // Initial progress (30%)

  const insets = useSafeAreaInsets();

  const handleLeftPress = () => {
    navigation.openDrawer();
  };

  const increaseProgress = () => {
    setProgress((prev) => Math.min(prev + 0.1, 1)); // Increment progress by 10%
  };

  const decreaseProgress = () => {
    setProgress((prev) => Math.max(prev - 0.1, 0)); // Decrement progress by 10%
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

      <ProgressBarWithLabel
        progress={progress}
        color="blue"
        backgroundColor="lightgray"
        showPercentage={true}
      />
      <View>
        <Button title="Increase" onPress={increaseProgress} />
        <Button title="Decrease" onPress={decreaseProgress} />
      </View>
      <CountdownTimer />
    </ThemedView>
  );
}
