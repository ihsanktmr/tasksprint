import React from "react";
import { ThemedView } from "app/components/ThemedView";
import { ThemedText } from "app/components/ThemedText";
import { distances, radii, typography } from "app/constants/theme";
import { useThemeColor } from "app/hooks/useThemeColor";
import { FocusState } from "app/state/board/types";
import { StyleSheet, TouchableOpacity } from "react-native";

interface FocusListItemProps {
  item: FocusState;
}

const FocusListItem: React.FC<FocusListItemProps> = ({ item }) => {
  const textColor = useThemeColor("text");

  return (
    <TouchableOpacity style={styles.focusItem}>
      <ThemedView style={styles.focusItemInner}>
        <ThemedView style={styles.textContainer}>
          <ThemedText style={[styles.message, { color: textColor }]}>
            {item.note}
          </ThemedText>
          <ThemedText style={[styles.timestamp, { color: textColor }]}>
            {new Date(item.startDate).toLocaleTimeString()} -{" "}
            {new Date(item.endDate).toLocaleTimeString()}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  focusItem: {
    borderRadius: radii.md,
    padding: distances.md,
    marginBottom: distances.sm,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  focusItemInner: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  message: {
    fontSize: 16,
    fontFamily: typography.primary.bold,
  },
  timestamp: {
    fontSize: 14,
    fontFamily: typography.secondary.regular,
    marginTop: distances.xxs,
  },
});

export default FocusListItem;
