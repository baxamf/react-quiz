import {
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { delAnswer, setAnswers } from "../features/quiz/questionSlice";

export default function QuizAnswer({ answerNumber, id, answer }) {
  const [newAnswer, setAnswer] = useState(answer);
  const dispatch = useDispatch();

  console.log(newAnswer.isCorrect);

  const answerTextHandler = (e) => {
    setAnswer({ ...newAnswer, answerTitle: e.target.value });
    dispatch(setAnswers({ ...newAnswer, answerTitle: e.target.value }));
  };

  const correctHandler = (e) => {
    setAnswer({ ...newAnswer, isCorrect: !newAnswer.isCorrect });
    dispatch(setAnswers({ ...newAnswer, isCorrect: !newAnswer.isCorrect }));
  };

  return (
    <Grid container justifyContent="space-between">
      <TextField
        label={"Answer " + answerNumber}
        required
        onChange={answerTextHandler}
        value={newAnswer.answerTitle}
        id="outlined-basic"
        variant="outlined"
      />
      <FormControlLabel
        control={
          <Switch onChange={correctHandler} checked={newAnswer.isCorrect} />
        }
        label="Correct"
      />

      <Button size="large" onClick={() => dispatch(delAnswer(id))}>
        Delete
      </Button>
    </Grid>
  );
}
