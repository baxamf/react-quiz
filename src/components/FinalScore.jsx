import { Button, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useResultStorage from "../app/hooks/useResultStorage";
import { resetPlayer } from "../features/quiz/quizSlice";

export default function FinalScore({ name, score, question }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lastResult = useResultStorage(name, `${score} / ${question}`);

  const quit = () => {
    dispatch(resetPlayer());
    navigate("/");
  };

  return (
    <Grid container display="grid">
      <Typography>
        {name}'s final score: {score} / {question}
      </Typography>
      <Button variant="outlined" size="large" onClick={quit}>
        Back to home page
      </Button>
      {lastResult && <Grid>Your last result: {lastResult}</Grid>}
    </Grid>
  );
}
