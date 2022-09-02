import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  role: "",
  score: 0,
  question: 0,
  status: false,
  choise: [],
};

export const nextQuestionAsync = createAsyncThunk(
  "quiz/nextQuestion",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }
);

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setPlayerName: (state, action) => {
      state.name = action.payload;
      action.payload === "admin"
        ? (state.role = "ADMIN")
        : (state.role = "USER");
    },

    setScore: (state) => {
      state.score += 1;
    },

    tryAgain: (state) => {
      state.score = 0;
      state.question = 0;
    },

    resetPlayer: () => initialState,

    setChoise: (state, action) => {
      const choise = state.choise;
      const id = action.payload;
      if (choise.some((el) => el === id)) {
        state.choise = choise.filter((el) => el !== id);
      } else {
        state.choise.push(id);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(nextQuestionAsync.pending, (state) => {
        state.status = true;
      })
      .addCase(nextQuestionAsync.fulfilled, (state) => {
        state.choise = [];
        state.status = false;
        state.question += 1;
      });
  },
});

export const selectQuiz = (state) => state.quiz;

export const { setPlayerName, setScore, setChoise, resetPlayer, tryAgain } =
  quizSlice.actions;

export default quizSlice.reducer;
