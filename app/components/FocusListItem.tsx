import React from "react";

import { ThemedText } from "app/components/ThemedText";
import { ThemedView } from "app/components/ThemedView";
import { distances, radii, shadowProps, typography } from "app/constants/theme";
import { useThemeColor } from "app/hooks/useThemeColor";
import { FocusState } from "app/state/board/types";
import { StyleSheet, TouchableOpacity } from "react-native";

interface FocusListItemProps {
  item: FocusState;
}

const FocusListItem: React.FC<FocusListItemProps> = React.memo(({ item }) => {
  const textColor = useThemeColor("text");
  const backgroundColor = useThemeColor("background");

  return (
    <TouchableOpacity
      style={[styles.focusItem, { backgroundColor }, shadowProps]}
      activeOpacity={0.7}
    >
      <ThemedView style={styles.focusItemInner}>
        <ThemedView style={styles.textContainer}>
          <ThemedText
            style={[styles.message, { color: textColor }]}
            numberOfLines={2}
          >
            {item.note}
          </ThemedText>
          <ThemedText style={[styles.timestamp, { color: textColor }]}>
            {formatTimeRange(item.startDate, item.endDate)}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
});

const formatTimeRange = (
  start: string | number | Date,
  end: string | number | Date,
) =>
  `${new Date(start).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${new Date(end).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;

const styles = StyleSheet.create({
  focusItem: {
    borderRadius: radii.md,
    padding: distances.md,
    marginBottom: distances.sm,
    flexDirection: "row",
    alignItems: "center",
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
    opacity: 0.7,
  },
});

export default FocusListItem;
