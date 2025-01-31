import React from "react";

import { ThemedText } from "app/components/ThemedText";
import { typography } from "app/constants/theme";
import { useThemeColor } from "app/hooks/useThemeColor";
import { FocusState } from "app/state/board/types";
import { FlatList, StyleSheet } from "react-native";

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
        <ThemedText style={styles.emptyMessage}>
          No focus logs found.
        </ThemedText>
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
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: typography.primary.bold,
    width: "100%",
  },
});

export default FocusList;
