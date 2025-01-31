import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import FocusList from "app/components/FocusList";
import { Header } from "app/components/Header";
import { ThemedText } from "app/components/ThemedText";
import { useThemeColor } from "app/hooks/useThemeColor";
import { HomeScreenNavigationProp } from "app/navigation";
import { selectFocuses } from "app/state/board/selectors";
import { useSelector } from "react-redux";

export function FocusLogsScreen() {
  const focusLogs = useSelector(selectFocuses);

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
      <ThemedText
        style={{ fontSize: 20, textAlign: "center", marginVertical: 10 }}
      >
        Focus Logs
      </ThemedText>
      <FocusList data={focusLogs} />
    </>
  );
}
