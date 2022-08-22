import { Box, TextField, Checkbox } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setAnswers } from "../features/quiz/answerSlice";

export default function QuizAnswer({ answerHandler, answerTitle, id }) {
  const [answer, setAnswer] = useState({ title: "", isCorrect: false, id });
  const dispatch = useDispatch();

  const answerTextHandler = (e) => {
    setAnswer({ ...answer, title: e.target.value });
    dispatch(setAnswers({ ...answer, title: e.target.value }));
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
        label={"Answer " + answerTitle}
        variant="outlined"
      />
      <Checkbox onChange={correctHandler} value={answer.isCorrect} />
    </Box>
  );
}
