import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import QuizList from "../components/QuizList";

export default function QuizLayout() {
  return (
    <Grid container gap={6} justifyContent="space-evenly" alignItems="start">
      <QuizList />
      <Outlet />
    </Grid>
  );
}
