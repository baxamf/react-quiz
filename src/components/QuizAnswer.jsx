import {
  Box,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { delAnswer, setAnswers } from "../features/quiz/questionSlice";

export default function QuizAnswer({ answerNumber, id }) {
  const [answer, setAnswer] = useState({
    answerTitle: "",
    isCorrect: false,
    id,
  });
  const dispatch = useDispatch();

  const answerTextHandler = (e) => {
    setAnswer({ ...answer, answerTitle: e.target.value });
    dispatch(setAnswers({ ...answer, answerTitle: e.target.value }));
  };

  const correctHandler = (e) => {
    setAnswer({ ...answer, isCorrect: !answer.isCorrect });
    dispatch(setAnswers({ ...answer, isCorrect: !answer.isCorrect }));
  };

  return (
    <Box>
      <TextField
        required
        onChange={answerTextHandler}
        value={answer.title}
        id="outlined-basic"
        label={"Answer " + answerNumber}
        variant="outlined"
      />
      <FormControlLabel
        control={
          <Checkbox onChange={correctHandler} value={answer.isCorrect} />
        }
        label="Correct"
      />

      <Button size="large" onClick={() => dispatch(delAnswer(id))}>
        Delete
      </Button>
    </Box>
  );
}
