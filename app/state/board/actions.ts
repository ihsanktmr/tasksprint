import { createAction } from "@reduxjs/toolkit";

import { FocusState } from "./types";

export const addFocus = createAction<FocusState>("board/addFocus");
