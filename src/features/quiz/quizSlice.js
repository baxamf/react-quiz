// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { quizApi, useGetQuizQuestionsQuery } from "../api/quizApi";

// const initialState = [];

// export const quizSlice = createSlice({
//   name: "quiz",
//   initialState,
//   reducers: {
//     addQuizQuestion: (state, action) => {
//       state.push(action.payload);
//     },
//     addQuizQuestions: (state, action) => {
//       state = [...action.payload];
//     },
//   },
//   // extraReducers: (builder) => {
//   //   builder.addCase(
//   //     quizApi.endpoints.getQuizQuestions().fulfilled,
//   //     (state, action) => {
//   //       console.log(action);
//   //       state = action.payload;
//   //     }
//   //   );
//   // },
// });

// export const selectQuiz = (state) => state.quiz;

// export const { addQuizQuestion, addQuizQuestions } = quizSlice.actions;

// export default quizSlice.reducer;
