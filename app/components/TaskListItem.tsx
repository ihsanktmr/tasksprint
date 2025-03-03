import React from "react";

import { ThemedText } from "app/components/ThemedText";
import { ThemedView } from "app/components/ThemedView";
import { distances, radii, shadowProps, typography } from "app/constants/theme";
import { useThemeColor } from "app/hooks/useThemeColor";
import { TaskState } from "app/state/board/types";
import { StyleSheet, TouchableOpacity } from "react-native";

interface TaskListItemProps {
  item: TaskState;
}

const TaskListItem: React.FC<TaskListItemProps> = React.memo(({ item }) => {
  const textColor = useThemeColor("text");
  const backgroundColor = useThemeColor("background");

  return (
    <TouchableOpacity
      style={[styles.taskItem, { backgroundColor }, shadowProps]}
      activeOpacity={0.7}
    >
      <ThemedView style={styles.taskItemInner}>
        <ThemedView style={styles.textContainer}>
          <ThemedText
            style={[styles.title, { color: textColor }]}
            numberOfLines={2}
          >
            {item.title}
          </ThemedText>
          <ThemedText
            style={[styles.description, { color: textColor }]}
            numberOfLines={1}
          >
            {item.description}
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  taskItem: {
    borderRadius: radii.md,
    padding: distances.md,
    marginBottom: distances.sm,
    flexDirection: "row",
    alignItems: "center",
  },
  taskItemInner: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: typography.primary.bold,
  },
  description: {
    fontSize: 14,
    fontFamily: typography.secondary.regular,
    marginTop: distances.xxs,
    opacity: 0.7,
  },
});

export default TaskListItem;
