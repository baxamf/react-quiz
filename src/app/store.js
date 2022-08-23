import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import quizReducer from "../features/quiz/quizSlice";
import questionReducer from "../features/quiz/questionSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quiz: quizReducer,
    question: questionReducer,
  },
});
