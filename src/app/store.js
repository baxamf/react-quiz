import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import quizReducer from "../features/quiz/quizSlice";
import answersReducer from "../features/quiz/answerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quiz: quizReducer,
    answers: answersReducer,
  },
});
