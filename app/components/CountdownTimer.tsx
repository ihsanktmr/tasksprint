import React, { useEffect, useState } from "react";

import {
  distances,
  genericSpacing,
  radii,
  typography,
} from "app/constants/theme";
import useCountdownTimer from "app/hooks/useCountdownTimer";
import { StyleSheet, TouchableOpacity } from "react-native";

import ProgressBarWithLabel from "./ProgressBarWithLabel";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import TimerButton from "./TimerButton";

const CountdownTimer = () => {
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

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{ flexDirection: "row" }}>
        <ThemedText type="title">
          {String(time.hours).padStart(2, "0")}:
          {String(time.minutes).padStart(2, "0")}:
          {String(time.seconds).padStart(2, "0")}
        </ThemedText>
      </ThemedView>
      <ProgressBarWithLabel
        progress={progress}
        color="blue"
        backgroundColor="lightgray"
        showPercentage={true}
      />
      <ThemedView style={styles.buttonRow}>
        <TimerButton
          iconName="play"
          onPress={startTimer}
          label="Start"
          color="green"
          size={30}
        />
        <TimerButton
          iconName="pause"
          onPress={pauseTimer}
          label="Pause"
          color="orange"
          size={30}
        />
        <TimerButton
          iconName="refresh"
          onPress={() => resetTimer(selectedMinutes)}
          label="Reset"
          color="blue"
          size={30}
        />
      </ThemedView>
      <ThemedView style={styles.buttonRow}>
        {[25, 60, 120, 180].map((minutes) => (
          <TouchableOpacity
            key={minutes}
            style={[
              styles.timeButton,
              selectedMinutes === minutes && styles.timeButtonActive,
            ]}
            onPress={() => handleTimeChange(minutes)}
            disabled={isPlaying}
          >
            <ThemedText style={styles.timeButtonThemedText}>
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
    width: "100%",
    paddingHorizontal: distances.md,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: distances.xl,
  },
  timeButton: {
    paddingHorizontal: distances.xs,
    backgroundColor: "#dcdcdc",
    borderRadius: radii.md,
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
