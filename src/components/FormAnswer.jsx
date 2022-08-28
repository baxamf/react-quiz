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

export default function FormAnswer({ answer }) {
  // const [newAnswer, setAnswer] = useState(answer);
  const dispatch = useDispatch();

  const answerTextHandler = (e) => {
    // setAnswer({ ...newAnswer, answerTitle: e.target.value });
    dispatch(setAnswers({ ...answer, answerTitle: e.target.value }));
  };

  const correctHandler = (e) => {
    // setAnswer({ ...newAnswer, isCorrect: !newAnswer.isCorrect });
    dispatch(setAnswers({ ...answer, isCorrect: !answer.isCorrect }));
  };

  return (
    <Grid container justifyContent="space-between">
      <TextField
        label={"Answer " + answer.id}
        required
        onChange={answerTextHandler}
        value={answer.answerTitle}
        id="outlined-basic"
        variant="outlined"
      />
      <FormControlLabel
        control={
          <Switch onChange={correctHandler} checked={answer.isCorrect} />
        }
        label="Correct"
      />

      <Button size="large" onClick={() => dispatch(delAnswer(answer.id))}>
        Delete
      </Button>
    </Grid>
  );
}
