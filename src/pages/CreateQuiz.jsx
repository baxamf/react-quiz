import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import QuizList from "../components/QuizList";

export default function CreateQuiz() {
  const CreateQuizContainer = (props) => (
    <Grid
      container
      sx={{
        alignItems: "start",
        padding: "2rem",
      }}
    >
      {props.children}
    </Grid>
  );

  return (
    <CreateQuizContainer>
      <QuizList />
      <Outlet />
    </CreateQuizContainer>
  );
}
