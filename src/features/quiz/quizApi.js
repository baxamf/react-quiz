import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://62d926c290883139359c0527.mockapi.io/";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: ["Quiz"],
  endpoints: (builder) => ({
    getQuizQuestions: builder.query({
      query: () => "quiz",
      providesTags: (result) => ["Quiz"],
    }),
    getQuizQuestion: builder.query({
      query: (id) => `quiz/${id}`,
      providesTags: (result, id) => [{ type: "Quiz", id }],
    }),
    addQuizQuestion: builder.mutation({
      query: (question) => ({
        url: "quiz",
        method: "POST",
        body: question,
      }),
      invalidatesTags: ["Quiz"],
    }),
    updateQuestion: builder.mutation({
      query: (question) => ({
        url: `quiz/${question.id}`,
        method: "PUT",
        body: question,
      }),
      invalidatesTags: ["Quiz"],
    }),
    delQuizQuestion: builder.mutation({
      query: (id) => ({
        url: `quiz/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Quiz"],
    }),
  }),
});

export const {
  useGetQuizQuestionQuery,
  useGetQuizQuestionsQuery,
  useAddQuizQuestionMutation,
  useDelQuizQuestionMutation,
  useUpdateQuestionMutation,
} = quizApi;
