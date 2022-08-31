import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import quizReducer from "../features/quiz/quizSlice";
import questionReducer from "../features/quiz/questionSlice";
import { quizApi } from "../features/quiz/quizApi";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    question: questionReducer,
    [quizApi.reducerPath]: quizApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quizApi.middleware),
});
