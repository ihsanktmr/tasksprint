import React from "react";

import { distances, radii, typography } from "app/constants/theme";
import { useThemeColor } from "app/hooks/useThemeColor";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { ProgressBar } from "react-native-paper";

interface ProgressBarWithLabelProps {
  progress: number; // Progress value between 0 and 1
  color?: string; // Custom color for the progress bar
  backgroundColor?: string; // Background color for the unfilled portion
  labelStyle?: StyleProp<ViewStyle>; // Style for the percentage labels
  barStyle?: StyleProp<ViewStyle>; // Style for the progress bar container
  showPercentage?: boolean; // Whether to show percentage labels
}

const ProgressBarWithLabel: React.FC<ProgressBarWithLabelProps> = ({
  progress,
  color = "grey", // Default color
  backgroundColor = "green", // Default background color
  labelStyle,
  barStyle,
  showPercentage = true,
}) => {
  // Clamp the progress value between 0 and 1
  const clampedProgress = Math.min(Math.max(progress, 0), 1);
  const textColor = useThemeColor("text");

  return (
    <View style={[styles.container, barStyle]}>
      <ProgressBar
        progress={clampedProgress}
        color={color}
        style={[styles.progressBar, { backgroundColor }]}
      />

      {showPercentage && (
        <View style={[styles.labelContainer, labelStyle]}>
          <Text
            style={{ ...styles.percentageText, color: textColor }}
          >{`${Math.round(clampedProgress * 100)}% Focused`}</Text>
          <Text
            style={{ ...styles.percentageText, color: textColor }}
          >{`${Math.round((1 - clampedProgress) * 100)}% Remaining`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: distances.md,
    width: "100%",
  },
  progressBar: {
    height: 18,
    borderRadius: radii.full,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: distances.md,
  },
  percentageText: {
    fontSize: 14,
    fontFamily: typography.primary.bold,
  },
});

export default ProgressBarWithLabel;
