import React from "react";

import { ThemedText } from "app/components/ThemedText";
import { typography } from "app/constants/theme";
import { useThemeColor } from "app/hooks/useThemeColor";
import { TaskState } from "app/state/board/types";
import { FlatList, StyleSheet, View } from "react-native";

import TaskListItem from "./TaskListItem";

interface TaskListProps {
  data: TaskState[];
}

const TaskList: React.FC<TaskListProps> = ({ data }) => {
  const backgroundColor = useThemeColor("background");

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <TaskListItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <ThemedText style={styles.emptyMessage}>
            No tasks available.
          </ThemedText>
        </View>
      }
      contentContainerStyle={[styles.contentContainer, { backgroundColor }]}
      style={[styles.container, { backgroundColor }]}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 30,
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: typography.primary.bold,
    opacity: 0.7,
  },
});

export default TaskList;
