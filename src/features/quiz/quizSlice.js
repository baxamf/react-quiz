import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", score: 0, question: 0 };

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setPlayerName: (state, action) => {
      state.name = action.payload;
    },
    setScore: (state) => {
      state.score += 1;
    },
    nextQuestion: (state) => {
      state.question += 1;
    },
    resetPlayer: (state) => {
      state.name = "";
      state.score = 0;
      state.question = 0;
    },
  },
});

export const selectQuiz = (state) => state.quiz;

export const { setPlayerName, setScore, nextQuestion, resetPlayer } =
  quizSlice.actions;

export default quizSlice.reducer;
