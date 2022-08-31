import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import QuizList from "../components/create/QuizList";

export default function CreateQuiz() {
  return (
    <Grid container alignItems="start" gap={10}>
      <QuizList />
      <Outlet />
    </Grid>
  );
}
