import { Grid, Button, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../components/Error";
import QuizListQuestion from "../components/QuizListQuestionItem";

import { useGetQuizQuestionsQuery } from "../features/api/quizApi";
import { resetQuestion } from "../features/quiz/questionSlice";

export default function QuizList() {
  const dispatch = useDispatch();
  const { quizId } = useParams();
  const navigate = useNavigate();
  const {
    data: questions,
    isError,
    isLoading,
    refetch,
  } = useGetQuizQuestionsQuery();

  useEffect(() => {
    dispatch(resetQuestion());
  }, [quizId]);

  const newQuestion = () => {
    dispatch(resetQuestion());
    navigate("/create");
  };

  return (
    <Grid display="grid" gap={3}>
      <Grid container gap={2}>
        <Button variant="contained" size="large" onClick={newQuestion}>
          Add new Question
        </Button>
        <Button variant="outlined" size="large" onClick={() => navigate("/")}>
          Back to home page
        </Button>
      </Grid>

      {isLoading && <CircularProgress />}
      {isError && <Error handler={refetch} />}
      {questions &&
        questions.map((question) => (
          <QuizListQuestion
            key={question.id}
            question={question}
            url={quizId}
          />
        ))}
    </Grid>
  );
}
