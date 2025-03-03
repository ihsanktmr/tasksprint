import { createAction } from "@reduxjs/toolkit";

import { FocusState } from "./types";
import { TaskState } from "./types";

export const addFocus = createAction<FocusState>("board/addFocus");

export const addTask = createAction<TaskState>("tasks/addTask");
export const removeTask = createAction<string>("tasks/removeTask");
export const updateTask = createAction<TaskState>("tasks/updateTask");