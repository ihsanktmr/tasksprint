import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { distances, radii, typography } from "app/constants/theme";
import { IoniconName } from "app/constants/types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Importing vector icons
interface TimerButtonProps {
  iconName: IoniconName;
  onPress: () => void;
  label: string;
  color: string;
  size: number;
}

const TimerButton: React.FC<TimerButtonProps> = ({
  iconName,
  onPress,
  label,
  color,
  size,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: color, borderWidth: 1, borderColor: color },
      ]}
      onPress={onPress}
    >
      <Ionicons name={iconName} size={size} color="white" />
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: distances.sm,
    width: 70,
    borderRadius: radii.xl,
    marginHorizontal: distances.sm,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: typography.primary.bold,
    color: "white",
  },
});

export default TimerButton;
