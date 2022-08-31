import { TextField, Button, Switch, Grid, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
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
    <Grid container justifyContent="space-between" gap={2}>
      {error && ErrorWindow("Question must have at least 2 answers")}
      <TextField
        label={"Answer " + answer.id}
        required
        onChange={answerTextHandler}
        value={answer.answerTitle}
        variant="outlined"
        sx={{ flex: "1 0" }}
      />
      <Box>
        <Switch onChange={correctHandler} checked={answer.isCorrect} />
        <Typography color="text.secondary">Correct</Typography>
      </Box>

      <Button color="error" size="large" onClick={onDelAnswer}>
        <DeleteIcon />
      </Button>
    </Grid>
  );
}
