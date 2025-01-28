import React from "react";

import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { MD3Colors, ProgressBar } from "react-native-paper";

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

  return (
    <View style={[styles.container, barStyle]}>
      <ProgressBar
        progress={clampedProgress}
        color={color}
        style={[styles.progressBar, { backgroundColor }]}
      />

      {showPercentage && (
        <View style={[styles.labelContainer, labelStyle]}>
          <Text style={styles.percentageText}>{`${Math.round(
            clampedProgress * 100,
          )}% Filled`}</Text>
          <Text style={styles.percentageText}>{`${Math.round(
            (1 - clampedProgress) * 100,
          )}% Remaining`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    width: "100%",
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  percentageText: {
    fontSize: 14,
    color: MD3Colors.neutralVariant50,
  },
});

export default ProgressBarWithLabel;
