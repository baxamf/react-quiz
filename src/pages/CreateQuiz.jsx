import { Grid } from "@mui/material";
import Question from "../components/create/Question";
import QuizList from "../components/create/QuizList";

export default function CreateQuiz() {
  return (
    <Grid container alignItems="start" gap={10}>
      <QuizList />
      <Question />
    </Grid>
  );
}
