import { createReducer } from "@reduxjs/toolkit";

import { addFocus } from "./actions";
import { BoardState } from "./types";

const initialState: BoardState = {
  focuses: [],
};

const boardReducer = createReducer(initialState, (builder) => {
  builder.addCase(addFocus, (state, action) => {
    state.focuses.push(action.payload);
  });
});

export default boardReducer;
