import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useDelQuizQuestionMutation } from "../features/api/quizApi";
import { setQuestion } from "../features/quiz/questionSlice";
import { useDispatch } from "react-redux";

export default function QuizListQuestionItem({ question }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [delQuizQuestion] = useDelQuizQuestionMutation();

  const editHandler = () => {
    dispatch(setQuestion(question));
    navigate(`${question.id}`);
  };

  return (
    <Grid container alignItems="center" justifyContent="space-between" gap={1}>
      <Typography>{question.title}</Typography>
      <Grid item container gap={1}>
        <Button variant="outlined" onClick={() => editHandler()}>
          Edit
        </Button>
        <Button variant="outlined" onClick={() => delQuizQuestion(question.id)}>
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}
