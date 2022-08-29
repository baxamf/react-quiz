import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", score: 0, question: 0 };

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setPlayerName: (state, action) => {
      state.name = action.payload;
    },
    setScore: (state, action) => {
      state.score += action.payload;
    },
    nextQuestion: (state) => {
      state.question += 1;
    },
  },
});

export const selectQuiz = (state) => state.quiz;

export const { setPlayerName, setScore, nextQuestion } = quizSlice.actions;

export default quizSlice.reducer;
