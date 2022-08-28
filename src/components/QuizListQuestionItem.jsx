import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import { useDelQuizQuestionMutation } from "../features/api/quizApi";

export default function QuizListQuestionItem({ question, url }) {
  const navigate = useNavigate();
  const [delQuizQuestion] = useDelQuizQuestionMutation();

  const editHandler = () => {
    navigate(`${question.id}`);
  };

  const delHandler = async () => {
    await delQuizQuestion(question.id);
    question.id === url && navigate("/create");
  };

  return (
    <Grid container alignItems="center" justifyContent="space-between" gap={1}>
      <Typography>{question.title}</Typography>
      <Grid item container gap={1}>
        <Button variant="outlined" onClick={editHandler}>
          Edit
        </Button>
        <Button variant="outlined" onClick={delHandler}>
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}
