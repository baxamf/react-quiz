import { Grid, Typography, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  addAnswer,
  resetQuestion,
  setTitle,
} from "../features/quiz/questionSlice";
import FormAnswer from "./FormAnswer";

export default function FormQuestion({ question, submitHandler, title }) {
  const dispatch = useDispatch();
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
    <Grid
      display="grid"
      component="form"
      container
      gap={3}
      onSubmit={onSubmitHandler}
    >
      <Typography variant="h4" component="h4">
        {title}
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
    </Grid>
  );
}
