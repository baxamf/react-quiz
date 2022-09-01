import { createSlice } from "@reduxjs/toolkit";

const emptyAnswer = { answerTitle: "", isCorrect: false, id: 1 };
const emptyQuestion = {
  title: "",
  answers: [emptyAnswer, { ...emptyAnswer, id: 2 }],
};
const initialState = emptyQuestion;

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestion: (state, action) => action.payload,

    resetQuestion: () => initialState,

    setTitle: (state, action) => {
      state.title = action.payload;
    },

    addAnswer: (state) => {
      const answers = state.answers;
      state.answers.push({
        ...emptyAnswer,
        id: answers[answers.length - 1].id + 1,
      });
    },

    setAnswers: (state, action) => {
      const answers = state.answers;
      state.answers = answers.map((answer) =>
        answer.id === action.payload.id ? action.payload : answer
      );
    },

    delAnswer: (state, action) => {
      const answers = state.answers;
      state.answers = answers.filter((answer) => answer.id !== action.payload);
    },
  },
});

export const selectQuestion = (state) => state.question;

export const {
  addAnswer,
  setTitle,
  setAnswers,
  delAnswer,
  resetQuestion,
  setQuestion,
} = questionSlice.actions;

export default questionSlice.reducer;
