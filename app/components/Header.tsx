import React, { FC } from "react";

import { typography } from "app/constants/theme";
import { useThemeColor } from "app/hooks/useThemeColor";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface Props {
  leftIcon?: React.ReactNode;
  onLeftPress?: () => void;
}

export const Header: FC<Props> = ({ leftIcon, onLeftPress }) => {
  const backgroundColor = useThemeColor("background"); // Header background color
  const iconColor = useThemeColor("icon"); // Header icon color

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {leftIcon ? (
        <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
          {React.cloneElement(leftIcon as React.ReactElement, {
            color: iconColor,
          })}
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 100,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: typography.primary.bold,
    textAlign: "center",
    flex: 1,
    paddingTop: 10,
    paddingBottom: 12,
  },
  iconContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  placeholder: {
    width: 48, // Placeholder size for alignment
  },
});
