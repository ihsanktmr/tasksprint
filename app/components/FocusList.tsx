import React from "react";

import { ThemedText } from "app/components/ThemedText";
import { distances, typography } from "app/constants/theme";
import { useThemeColor } from "app/hooks/useThemeColor";
import { FocusState } from "app/state/board/types";
import { FlatList, StyleSheet, View } from "react-native";

import FocusListItem from "./FocusListItem";

interface FocusListProps {
  data: FocusState[];
}

const FocusList: React.FC<FocusListProps> = ({ data }) => {
  const backgroundColor = useThemeColor("background");

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <FocusListItem item={item} />}
      keyExtractor={(item) => item.startDate.toString()}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <ThemedText style={styles.emptyMessage}>
            No focus logs found.
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
    paddingTop: distances.sm,
    paddingBottom: distances.lg,
    flexGrow: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: distances.sm,
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: typography.primary.bold,
    opacity: 0.7,
  },
});

export default FocusList;
