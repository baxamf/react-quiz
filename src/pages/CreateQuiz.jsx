import { Grid } from "@mui/material";
import Question from "../components/create/Question";
import QuizList from "../components/create/QuizList";

export default function CreateQuiz() {
  return (
    <Grid container alignItems="start" justifyContent="space-evenly" gap="10vw">
      <QuizList />
      <Question />
    </Grid>
  );
}
