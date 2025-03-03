import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FABButton } from "app/components/FABButton";
import { Header } from "app/components/Header";
import TaskList from "app/components/TaskList";
import { ThemedText } from "app/components/ThemedText";
import { useThemeColor } from "app/hooks/useThemeColor";
import { HomeScreenNavigationProp } from "app/navigation";
import { addTask } from "app/state/board/actions";
import { selectTasks } from "app/state/board/selectors";
import { TaskState } from "app/state/board/types";
import { useDispatch, useSelector } from "react-redux";

export function TasksScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const iconColor = useThemeColor("icon");
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const handleLeftPress = () => {
    navigation.openDrawer();
  };

  const handleFABPress = () => {
    const newTask: TaskState = {
      id: Date.now().toString(),
      title: "New Task",
      description: "This is a new task.",
      completed: false,
    };
    dispatch(addTask(newTask));
  };

  return (
    <>
      <Header
        leftIcon={<Ionicons name="menu" size={24} color={iconColor} />}
        onLeftPress={handleLeftPress}
      />
      <ThemedText>TASKS</ThemedText>
      <TaskList data={tasks} />
      <FABButton onPress={handleFABPress} icon="plus" />
    </>
  );
}
