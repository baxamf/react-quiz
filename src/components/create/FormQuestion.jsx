import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useDispatch, useSelector } from "react-redux";
import {
  addAnswer,
  selectQuestion,
  setTitle,
} from "../../features/quiz/questionSlice";
import FormAnswer from "./FormAnswer";

export default function FormQuestion({ submitHandler }) {
  const dispatch = useDispatch();
  const question = useSelector(selectQuestion);
  const answers = question.answers;

  const questionTitleHandler = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    submitHandler(question);
  };

  return (
    <Box
      className="quiz-list-container"
      component="form"
      onSubmit={onSubmitHandler}
    >
      <Typography variant="h4" color="text.primary">
        {question.id ? "Edit Question" : "Create new Question"}
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
      <Grid container gap={2}>
        <Button
          startIcon={<AddBoxIcon />}
          variant="outlined"
          size="large"
          onClick={() => dispatch(addAnswer())}
        >
          Add Answer
        </Button>
        <Button variant="contained" type="submit" size="large">
          Save Question
        </Button>
      </Grid>
    </Box>
  );
}
