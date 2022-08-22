import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addQuizQuestion: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectQuiz = (state) => state.quiz;

export const { addQuizQuestion } = quizSlice.actions;

export default quizSlice.reducer;
