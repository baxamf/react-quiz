import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://62d926c290883139359c0527.mockapi.io/";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getQuizQuestions: builder.query({
      query: () => "quiz",
    }),
    addQuizQuestion: builder.mutation({
      query: (body) => ({
        url: "quiz",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetQuizQuestionsQuery, useAddQuizQuestionMutation } = quizApi;
