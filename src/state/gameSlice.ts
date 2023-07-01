import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
  questions: Question[];
  goodAnswers: Question[];
  badAnswers: Question[];
  answerState: "timeout" | "good" | "bad" | "";
}

const pickRandomNElements = <Type>(arr: Type[], n: number) =>
  [...arr].sort(() => 0.5 - Math.random()).slice(0, n);

const initialState: GameState = {
  questions: [],
  goodAnswers: [],
  badAnswers: [],
  answerState: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    chooseNQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = pickRandomNElements(action.payload, 10);
      state.goodAnswers = [];
      state.badAnswers = [];
    },
    markAsGoodAnswer: (state, action: PayloadAction<Question>) => {
      state.questions = state.questions.filter(
        (q) => q.id !== action.payload.id
      );
      state.goodAnswers.push(action.payload);
      state.answerState = "good";
    },
    markAsBadAnswer: (state, action: PayloadAction<Question>) => {
      state.questions = state.questions.filter(
        (q) => q.id !== action.payload.id
      );
      state.badAnswers.push(action.payload);
      state.answerState = "bad";
    },
    markAsTimeout: (state, action: PayloadAction<Question>) => {
      state.questions = state.questions.filter(
        (q) => q.id !== action.payload.id
      );
      state.badAnswers.push(action.payload);
      state.answerState = "timeout";
    },
    resetAnswerState: (state) => {
      state.answerState = "";
    },
  },
});

export const {
  chooseNQuestions,
  markAsGoodAnswer,
  markAsBadAnswer,
  markAsTimeout,
  resetAnswerState,
} = gameSlice.actions;

export const selectNextQuestion = (state: { game: GameState }) =>
  state.game.questions && (state.game.questions[0] ?? null);
export const selectQuestions = (state: { game: GameState }) =>
  state.game.questions;
export const selectGoodAnswers = (state: { game: GameState }) =>
  state.game.goodAnswers;
export const selectBadAnswers = (state: { game: GameState }) =>
  state.game.badAnswers;
export const selectAnswerState = (state: { game: GameState }) =>
  state.game.answerState;

export default gameSlice.reducer;
