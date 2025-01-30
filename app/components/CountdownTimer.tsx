import React, { useEffect, useState } from "react";

import {
  distances,
  genericSpacing,
  radii,
  typography,
} from "app/constants/theme";
import useCountdownTimer from "app/hooks/useCountdownTimer";
import { useThemeColor } from "app/hooks/useThemeColor";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import ProgressBarWithLabel from "./ProgressBarWithLabel";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import TimerButton from "./TimerButton";

const CountdownTimer = () => {
  const textColor = useThemeColor("text");
  const backgroundColor = useThemeColor("background");

  const [selectedMinutes, setSelectedMinutes] = useState(25);
  const { time, isPlaying, startTimer, pauseTimer, resetTimer } =
    useCountdownTimer(selectedMinutes);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate the elapsed time in seconds
    if (isPlaying) {
      const totalTimeInSeconds = selectedMinutes * 60;
      const elapsedTimeInSeconds =
        totalTimeInSeconds -
        (time.hours * 60 * 60 + time.minutes * 60 + time.seconds);

      const progressPercentage = Math.max(
        0,
        Math.min(elapsedTimeInSeconds / totalTimeInSeconds, 1),
      );

      setProgress(progressPercentage);
    }
  }, [isPlaying, time, selectedMinutes]);

  const handleTimeChange = (minutes: number) => {
    setSelectedMinutes(minutes);
    resetTimer(minutes);
    setProgress(0);
  };

  const renderControlButtons = () => {
    return (
      <ThemedView style={styles.buttonRow}>
        {isPlaying ? (
          <TimerButton
            iconName="pause"
            onPress={pauseTimer}
            label="Pause"
            color="orange"
            size={30}
          />
        ) : (
          <TimerButton
            iconName="play"
            onPress={startTimer}
            label="Start"
            color="green"
            size={30}
          />
        )}
        <View style={{ width: 10 }} />
        <TimerButton
          iconName="refresh"
          onPress={() => resetTimer(selectedMinutes)}
          label="Reset"
          color="blue"
          size={30}
        />
      </ThemedView>
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <ThemedText type="title">
          {String(time.hours).padStart(2, "0")}:
          {String(time.minutes).padStart(2, "0")}:
          {String(time.seconds).padStart(2, "0")}
        </ThemedText>
        {renderControlButtons()}
      </ThemedView>
      <ProgressBarWithLabel
        progress={progress}
        color="blue"
        backgroundColor="lightgray"
        showPercentage={true}
      />

      <ThemedView style={styles.buttonRow}>
        {[25, 60, 120, 180].map((minutes) => (
          <TouchableOpacity
            key={minutes}
            style={[
              { ...styles.timeButton, backgroundColor },
              selectedMinutes === minutes && styles.timeButtonActive,
            ]}
            onPress={() => handleTimeChange(minutes)}
            disabled={isPlaying}
          >
            <ThemedText
              style={{ ...styles.timeButtonThemedText, color: textColor }}
            >
              {minutes >= 60 ? `${minutes / 60} Hour` : `${minutes} Min`}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: genericSpacing,
  },
  buttonRow: {
    flexDirection: "row",
  },
  timeButton: {
    paddingHorizontal: distances.xs,
    paddingVertical: distances.xxs,
    borderRadius: radii.lg,
  },
  timeButtonActive: {
    backgroundColor: "#4caf50",
  },
  timeButtonThemedText: {
    fontSize: 16,
    fontFamily: typography.primary.bold,
  },
  controlButtons: {
    flexDirection: "row",
    gap: distances.md,
  },
});

export default CountdownTimer;
