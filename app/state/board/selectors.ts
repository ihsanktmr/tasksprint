import { RootState } from "..";

export const selectFocuses = (state: RootState) => state.board.focuses;
export const selectTasks = (state: RootState) => state.board.tasks;
