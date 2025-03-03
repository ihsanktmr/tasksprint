import { createReducer } from "@reduxjs/toolkit";

import { addTask, removeTask, updateTask } from "./actions";
import { addFocus } from "./actions";
import { BoardState } from "./types";

const initialState: BoardState = {
  focuses: [],
  tasks: [],
};

const boardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addFocus, (state, action) => {
      state.focuses.push(action.payload);
    })
    .addCase(addTask, (state, action) => {
      state.tasks.push(action.payload);
    })
    .addCase(removeTask, (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    })
    .addCase(updateTask, (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id,
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    });
});

export default boardReducer;
