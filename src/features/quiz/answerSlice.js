import { createSlice } from "@reduxjs/toolkit";

const emptyAnswer = { title: "", isCorrect: false, id: 1 };
const initialState = [emptyAnswer];

export const answerSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    addAnswer: (state) => {
      state.push({ ...emptyAnswer, id: state[state.length - 1].id + 1 });
      console.log(state);
    },
    setAnswers: (state, action) => {
      state = state.map((answer) =>
        answer.id === action.payload.id ? action.payload : answer
      );
    },
  },
});

export const selectAnswers = (state) => state.answers;

export const { addAnswer, setAnswers } = answerSlice.actions;

export default answerSlice.reducer;

// const answerHandler = (newAnswer) => {
//   setAnswers(
//     state.map((answer) => (answer.id === newAnswer.id ? newAnswer : answer))
//   );
// };
