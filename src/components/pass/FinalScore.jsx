import { Button, Grid, Typography } from "@mui/material";
import useResultStorage from "../../hooks/useResultStorage";
import { useDispatch } from "react-redux";
import { tryAgain } from "../../features/quiz/quizSlice";

export default function FinalScore({ name, score, question }) {
  const lastResult = useResultStorage(name, `${score} / ${question}`);
  const dispatch = useDispatch();

  const again = () => {
    dispatch(tryAgain());
  };

  return (
    <Grid className="grid-container" textAlign="center">
      <Typography variant="h4" component="h4" color="text.primary">
        {name}'s final score: {score} / {question}
      </Typography>

      {lastResult && (
        <Typography variant="body2" color="text.primary">
          Your last result: {lastResult}
        </Typography>
      )}
      <Button variant="outlined" size="large" onClick={again}>
        Try Again
      </Button>
    </Grid>
  );
}
