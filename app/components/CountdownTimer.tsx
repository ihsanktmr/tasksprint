import React, { useMemo, useState } from "react";

import {
  distances,
  genericSpacing,
  radii,
  typography,
} from "app/constants/theme";
import useCountdownTimer from "app/hooks/useCountdownTimer";
import { useThemeColor } from "app/hooks/useThemeColor";
import { addFocus } from "app/state/board/actions";
import { FocusState } from "app/state/board/types";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";

import ProgressBarWithLabel from "./ProgressBarWithLabel";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import TimerButton from "./TimerButton";

const DEFAULT_FOCUS_SESSION: FocusState = {
  span: 3600, // 1 hour in seconds
  startDate: new Date("2025-01-31T09:00:00Z"),
  endDate: new Date("2025-01-31T10:00:00Z"),
  note: "Focused on writing the project report",
};

const PRESET_TIMES = [1, 25, 60, 120, 180];

const CountdownTimer = () => {
  const dispatch = useDispatch();
  const textColor = useThemeColor("text");
  const backgroundColor = useThemeColor("background");

  const [selectedMinutes, setSelectedMinutes] = useState(25);
  const [focusEnded, setFocusEnded] = useState(false);

  const onEnd = () => {
    setFocusEnded(true);
    dispatch(addFocus(DEFAULT_FOCUS_SESSION));
    alert("END");
  };

  const { time, isPlaying, startTimer, pauseTimer, resetTimer } =
    useCountdownTimer(selectedMinutes, onEnd);

  const progress = useMemo(() => {
    if (!isPlaying) return 0;
    const totalSeconds = selectedMinutes * 60;
    const elapsedSeconds =
      totalSeconds - (time.hours * 3600 + time.minutes * 60 + time.seconds);
    return Math.min(elapsedSeconds / totalSeconds, 1);
  }, [isPlaying, time, selectedMinutes]);

  const handleTimeChange = (minutes: number) => {
    setSelectedMinutes(minutes);
    resetTimer(minutes);
    setFocusEnded(false);
  };

  const handleReset = () => {
    resetTimer(selectedMinutes);
    setFocusEnded(false);
  };

  const renderControlButtons = () => (
    <ThemedView style={styles.buttonRow}>
      {!focusEnded &&
        (isPlaying ? (
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
        ))}
      <View style={styles.buttonSpacer} />
      <TimerButton
        iconName="refresh"
        onPress={handleReset}
        label="Reset"
        color="blue"
        size={30}
      />
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.timerRow}>
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
        showPercentage
      />

      <ThemedView style={styles.buttonRow}>
        {PRESET_TIMES.map((minutes) => (
          <TouchableOpacity
            key={minutes}
            style={[
              styles.timeButton,
              { backgroundColor },
              selectedMinutes === minutes && styles.timeButtonActive,
            ]}
            onPress={() => handleTimeChange(minutes)}
            disabled={isPlaying}
          >
            <ThemedText style={[styles.timeButtonText, { color: textColor }]}>
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
  timerRow: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonRow: {
    flexDirection: "row",
  },
  buttonSpacer: {
    width: 10,
  },
  timeButton: {
    paddingHorizontal: distances.xs,
    paddingVertical: distances.xxs,
    borderRadius: radii.lg,
  },
  timeButtonActive: {
    backgroundColor: "#4caf50",
  },
  timeButtonText: {
    fontSize: 16,
    fontFamily: typography.primary.bold,
  },
});

export default CountdownTimer;
