import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Header } from "app/components/Header";
import { ThemedText } from "app/components/ThemedText";
import { useThemeColor } from "app/hooks/useThemeColor";
import { HomeScreenNavigationProp } from "app/navigation";

export function TasksScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const iconColor = useThemeColor("icon");

  const handleLeftPress = () => {
    navigation.openDrawer();
  };

  return (
    <>
      <Header
        leftIcon={<Ionicons name="menu" size={24} color={iconColor} />}
        onLeftPress={handleLeftPress}
      />
      <ThemedText>TASKS</ThemedText>
    </>
  );
}
