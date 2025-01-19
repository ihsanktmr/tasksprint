import React, { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Header } from "app/components/common/Header";
import { InternetModal } from "app/components/modals/InternetModal";
import { useThemeColor } from "app/hooks/useThemeColor";
import { isConnected, setupConnectivityListener } from "app/utils/netCheck";

export function HomeScreen() {
  const iconColor = useThemeColor("background");
  const navigation = useNavigation();

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
    navigation.navigate("Notifications");
  };

  return (
    <>
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
    </>
  );
}
