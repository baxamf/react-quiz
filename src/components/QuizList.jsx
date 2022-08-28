import { Grid, Button, CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";
import QuizListQuestion from "../components/QuizListQuestionItem";

import { useGetQuizQuestionsQuery } from "../features/api/quizApi";
import { resetQuestion } from "../features/quiz/questionSlice";

export default function QuizList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    data: questions,
    isError,
    isLoading,
    refetch,
  } = useGetQuizQuestionsQuery();

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
          <QuizListQuestion key={question.id} question={question} />
        ))}
    </Grid>
  );
}
