import { Box, Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import PassForm from "../components/PassForm";
import PassQuestion from "../components/PassQuestion";
import PlayerInfo from "../components/PlayerInfo";
import QuizList from "../components/QuizList";
import { useGetQuizQuestionsQuery } from "../features/api/quizApi";
import { selectQuestion } from "../features/quiz/questionSlice";
import { selectQuiz, setPlayerName } from "../features/quiz/quizSlice";

export default function PassQuiz() {
  const { data: quiz } = useGetQuizQuestionsQuery();
  const questionAmount = quiz ? quiz.length : 0;
  const scorePerQuestion = quiz ? 100 / quiz.length : 0;
  const { name, score, question } = useSelector(selectQuiz);

  if (question >= questionAmount && name) {
    return <PlayerInfo name={name} score={score} />;
  } else {
    return (
      <Grid
        container
        gap={6}
        display="grid"
        justifyContent="center"
        alignItems="center"
      >
        {name ? (
          <PlayerInfo name={name} score={score} />
        ) : (
          <PassForm firstQuestion={quiz && quiz[0]} />
        )}
        {name && (
          <>
            <Box>
              Question {question + 1}/{quiz.length}{" "}
            </Box>{" "}
            <PassQuestion
              question={quiz[question]}
              scorePerQuestion={scorePerQuestion}
            />
          </>
        )}
      </Grid>
    );
  }
}
