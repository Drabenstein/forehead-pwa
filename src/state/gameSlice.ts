import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
  questions: Question[];
  currentQuestionIndex?: number;
}

const initialState: GameState = {
  questions: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
  },
});

export const { setQuestions } = gameSlice.actions;
export default gameSlice.reducer;
