import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GameState {
    questions: Question[];
    goodAnswers: Question[];
    badAnswers: Question[];
};

const initialState: GameState = {
    questions: [],
    goodAnswers: [],
    badAnswers: []
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setQuestions: (state, action: PayloadAction<Question[]>) => {
            state.questions = action.payload;
        },
        markGoodAnswer: (state, action: PayloadAction<Question>) => {
            state.questions.shift();
            state.goodAnswers.push(action.payload);
        },
        markBadAnswer: (state, action: PayloadAction<Question>) => {
            state.questions.shift();
            state.badAnswers.push(action.payload);
        }
    }
});

export const { setQuestions, markGoodAnswer, markBadAnswer } = gameSlice.actions;

export const selectQuestions = (state: { game: GameState }) => state.game.questions;
export const selectGoodAnswers = (state: { game: GameState }) => state.game.goodAnswers;
export const selectBadAnswers = (state: { game: GameState }) => state.game.badAnswers;
export const selectNextAnswer = (state: { game: GameState }) => state.game.questions[0];

export default gameSlice.reducer;
