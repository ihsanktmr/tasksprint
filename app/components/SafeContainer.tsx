import React from "react";

import { View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SafeContainerProps {
  children: React.ReactNode;
  style?: ViewStyle; // Allows custom styles to be passed in
}

// This is not working, It's only working when applied manually / inline
const SafeContainer: React.FC<SafeContainerProps> = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        marginTop: -insets.top,
        marginBottom: -insets.bottom,
        marginLeft: -insets.left,
        marginRight: -insets.right,
      }}
    >
      {children}
    </View>
  );
};

export default SafeContainer;
