import { TextField, Switch, Grid, Typography, IconButton } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useDispatch, useSelector } from "react-redux";
import {
  delAnswer,
  selectQuestion,
  setAnswers,
} from "../../features/quiz/questionSlice";
import useError from "../../hooks/useError";

export default function FormAnswer({ answer }) {
  const dispatch = useDispatch();
  const { answers } = useSelector(selectQuestion);
  const { error, setError, ErrorWindow } = useError();

  const answerTextHandler = (e) => {
    dispatch(setAnswers({ ...answer, answerTitle: e.target.value }));
  };

  const correctHandler = (e) => {
    dispatch(setAnswers({ ...answer, isCorrect: !answer.isCorrect }));
  };

  const onDelAnswer = () => {
    if (answers.length > 2) {
      dispatch(delAnswer(answer.id));
    } else {
      setError(true);
    }
  };

  return (
    <Grid container>
      {error && ErrorWindow("Question must have at least 2 answers")}
      <TextField
        label={"Answer " + answer.id}
        required
        onChange={answerTextHandler}
        value={answer.answerTitle}
        variant="outlined"
        sx={{ flex: "1 0 280px" }}
      />
      <Grid container alignItems="center">
        <Switch onChange={correctHandler} checked={answer.isCorrect} />
        <Typography color={answer.isCorrect ? "primary" : "text.secondary"}>
          Correct
        </Typography>
        <IconButton
          sx={{ marginLeft: "auto" }}
          color="error"
          onClick={onDelAnswer}
        >
          <BackspaceIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}
