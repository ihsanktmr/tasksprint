import React, { useState } from "react";

import { distances, radii, typography } from "app/constants/theme";
import useCountdownTimer from "app/hooks/useCountdownTimer";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";

import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const CountdownTimer = () => {
  const [selectedMinutes, setSelectedMinutes] = useState(25);
  const { time, startTimer, pauseTimer, resetTimer } =
    useCountdownTimer(selectedMinutes);

  const handleTimeChange = (minutes: number) => {
    setSelectedMinutes(minutes);
    resetTimer(minutes);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{ flexDirection: "row" }}>
        <ThemedView style={styles.timerTextContainer}>
          <ThemedText type="title">
            {String(time.hours).padStart(2, "0")}:
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.timerTextContainer}>
          <ThemedText type="title">
            {String(time.minutes).padStart(2, "0")}:
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.timerTextContainer}>
          <ThemedText type="title">
            {String(time.seconds).padStart(2, "0")}
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.timeButton,
            selectedMinutes === 25 && styles.timeButtonActive,
          ]}
          onPress={() => handleTimeChange(25)}
        >
          <ThemedText style={styles.timeButtonThemedText}>25 Min</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.timeButton,
            selectedMinutes === 60 && styles.timeButtonActive,
          ]}
          onPress={() => handleTimeChange(60)}
        >
          <ThemedText style={styles.timeButtonThemedText}>1 Hour</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.timeButton,
            selectedMinutes === 120 && styles.timeButtonActive,
          ]}
          onPress={() => handleTimeChange(120)}
        >
          <ThemedText style={styles.timeButtonThemedText}>2 Hours</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.timeButton,
            selectedMinutes === 180 && styles.timeButtonActive,
          ]}
          onPress={() => handleTimeChange(180)}
        >
          <ThemedText style={styles.timeButtonThemedText}>3 Hours</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.controlButtons}>
        <Button title="Start" onPress={startTimer} />
        <Button title="Pause" onPress={pauseTimer} />
        <Button title="Reset" onPress={() => resetTimer(selectedMinutes)} />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timerTextContainer: {
    width: 52,
  },
  buttonRow: {
    width: "100%",
    paddingHorizontal: distances.md,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: distances.xl,
  },
  timeButton: {
    paddingHorizontal: distances.md,
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
