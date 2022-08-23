import { createSlice } from "@reduxjs/toolkit";

const emptyAnswer = { answerTitle: "", isCorrect: false, id: 1 };
const emptyQuestion = { title: "", answers: [emptyAnswer] };
const initialState = emptyQuestion;

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
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
    resetState: (state) => {
      state = initialState;
    },
  },
});

export const selectQuestion = (state) => state.question;

export const { addAnswer, setAnswers, delAnswer } = questionSlice.actions;

export default questionSlice.reducer;

// const answerHandler = (newAnswer) => {
//   setAnswers(
//     state.map((answer) => (answer.id === newAnswer.id ? newAnswer : answer))
//   );
// };
