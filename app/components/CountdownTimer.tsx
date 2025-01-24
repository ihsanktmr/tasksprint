import React, { useState } from "react";

import useCountdownTimer from "app/hooks/useCountdownTimer";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CountdownTimer = () => {
  const [selectedMinutes, setSelectedMinutes] = useState(25);
  const { time, startTimer, pauseTimer, resetTimer } =
    useCountdownTimer(selectedMinutes);

  const handleTimeChange = (minutes: number) => {
    setSelectedMinutes(minutes);
    resetTimer(minutes);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 60 }}>
          <Text style={styles.timerText}>
            {String(time.hours).padStart(2, "0")}:
          </Text>
        </View>
        <View style={{ width: 60 }}>
          <Text style={styles.timerText}>
            {String(time.minutes).padStart(2, "0")}:
          </Text>
        </View>

        <View style={{ width: 60 }}>
          <Text style={styles.timerText}>
            {String(time.seconds).padStart(2, "0")}
          </Text>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.timeButton,
            selectedMinutes === 25 && styles.timeButtonActive,
          ]}
          onPress={() => handleTimeChange(25)}
        >
          <Text style={styles.timeButtonText}>25 Min</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.timeButton,
            selectedMinutes === 60 && styles.timeButtonActive,
          ]}
          onPress={() => handleTimeChange(60)}
        >
          <Text style={styles.timeButtonText}>1 Hour</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.timeButton,
            selectedMinutes === 120 && styles.timeButtonActive,
          ]}
          onPress={() => handleTimeChange(120)}
        >
          <Text style={styles.timeButtonText}>2 Hours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.timeButton,
            selectedMinutes === 180 && styles.timeButtonActive,
          ]}
          onPress={() => handleTimeChange(180)}
        >
          <Text style={styles.timeButtonText}>3 Hours</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.controlButtons}>
        <Button title="Start" onPress={startTimer} />
        <Button title="Pause" onPress={pauseTimer} />
        <Button title="Reset" onPress={() => resetTimer(selectedMinutes)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timerText: {
    marginRight: 3,
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },
  timeButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#dcdcdc",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  timeButtonActive: {
    backgroundColor: "#4caf50",
  },
  timeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  controlButtons: {
    flexDirection: "row",
    gap: 10,
  },
});

export default CountdownTimer;
