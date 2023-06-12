import type { Board } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";

const initialBoardState: Board[] | Board = [];

export const boardsSlice = createSlice({
  name: "boards",
  initialState: initialBoardState,
  reducers: {
    setBoards: (state, action) => {
      return action.payload;
    },
  },
});

export const { setBoards } = boardsSlice.actions;
export default boardsSlice.reducer;
