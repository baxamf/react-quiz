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
      if (state.answers.length > 2) {
        const answers = state.answers;
        state.answers = answers.filter(
          (answer) => answer.id !== action.payload
        );
      } else {
        alert("Question must have at least 2 answers");
      }
    },
    setQuestion: (state, action) => {
      const question = action.payload;
      state.id = question.id;
      state.title = question.title;
      state.answers = question.answers;
    },
    resetQuestion: (state) => {
      state.title = emptyQuestion.title;
      state.answers = emptyQuestion.answers;
    },
  },
});

export const selectQuestion = (state) => state.question;

export const { addAnswer, setAnswers, delAnswer, resetQuestion, setQuestion } =
  questionSlice.actions;

export default questionSlice.reducer;
