import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import QuizAnswer from "../components/QuizAnswer";
import { addAnswer, selectQuestion } from "../features/quiz/questionSlice";
import { addQuizQuestion } from "../features/quiz/quizSlice";

export default function CreateQuiz() {
  const question = useSelector(selectQuestion);
  const answers = question.answers;
  const dispatch = useDispatch();
  const [questionTitle, setQuestionTitle] = useState("");

  const questionTitleHandler = (e) => {
    setQuestionTitle(e.target.value);
  };

  const onSaveQuestion = () => {
    dispatch(addQuizQuestion(question));
  };

  console.log(answers);

  return (
    <Box>
      <Typography variant="h2" component="h2">
        Create Quiz Question
      </Typography>
      <TextField
        value={questionTitle}
        onChange={questionTitleHandler}
        id="outlined-basic"
        label="Question"
        variant="outlined"
      />
      {answers.map((answer, index) => (
        <QuizAnswer key={answer.id} answerNumber={index + 1} id={answer.id} />
      ))}
      <Button size="large" onClick={() => dispatch(addAnswer())}>
        Add Answer
      </Button>
      <Button size="large" onClick={() => onSaveQuestion()}>
        Save Question
      </Button>
    </Box>
  );
}
