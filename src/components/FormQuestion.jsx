import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addAnswer,
  resetQuestion,
  selectQuestion,
  setTitle,
} from "../features/quiz/questionSlice";
import FormAnswer from "./FormAnswer";

export default function FormQuestion({ submitHandler }) {
  const dispatch = useDispatch();
  const question = useSelector(selectQuestion);
  const answers = question.answers;

  const resetHandler = () => {
    dispatch(resetQuestion());
  };

  const questionTitleHandler = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    submitHandler(question);
  };

  return (
    <Box display="grid" component="form" gap={3} onSubmit={onSubmitHandler}>
      <Typography variant="h4" component="h4">
        {question.title ? "Edit Question" : "Create new Question"}
      </Typography>
      <TextField
        fullWidth
        required
        value={question.title}
        onChange={questionTitleHandler}
        id="outlined-basic"
        label="Question"
        variant="outlined"
      />
      {answers.map((answer) => (
        <FormAnswer answer={answer} key={answer.id} />
      ))}
      <Button
        variant="outlined"
        size="large"
        onClick={() => dispatch(addAnswer())}
      >
        Add Answer
      </Button>
      <Button variant="contained" type="submit" size="large">
        Save Question
      </Button>
      <Button size="large" onClick={resetHandler}>
        Reset
      </Button>
    </Box>
  );
}
