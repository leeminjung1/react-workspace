import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "boardState",
  initialState: {
    boardId: null,
  },
  reducers: {
    setBoardId(state, action) {
      state.boardId = action.payload;
    },
  },
});

export const { setBoardId } = boardSlice.actions;
export default boardSlice.reducer;
