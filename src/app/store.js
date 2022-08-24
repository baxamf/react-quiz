import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import quizReducer from "../features/quiz/quizSlice";
import questionReducer from "../features/quiz/questionSlice";
import { quizApi } from "../features/api/quizApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quiz: quizReducer,
    question: questionReducer,
    [quizApi.reducerPath]: quizApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quizApi.middleware),
});
