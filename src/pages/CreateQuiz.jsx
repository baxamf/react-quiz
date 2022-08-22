import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import QuizAnswer from "../components/QuizAnswer";
import {
  addAnswer,
  answerSlice,
  selectAnswers,
} from "../features/quiz/answerSlice";
import { addQuizQuestion, selectQuiz } from "../features/quiz/quizSlice";

export default function CreateQuiz() {
  const answers = useSelector(selectAnswers);
  const quiz = useSelector(selectQuiz);
  const dispatch = useDispatch();
  const [question, setQuestion] = useState({ title: "", answers });

  const questionHandler = (e) => {
    setQuestion({ ...question, title: e.target.value });
  };

  console.log(question);
  console.log(quiz);
  console.log(answers);

  const onSaveQuestion = () => {
    dispatch(addQuizQuestion({ ...question, answers }));
  };

  return (
    <Box>
      <Typography variant="h2" component="h2">
        Create Quiz Question
      </Typography>
      <TextField
        value={question.title}
        onChange={questionHandler}
        id="outlined-basic"
        label="Question"
        variant="outlined"
      />
      {answers.map((answer, index) => (
        <QuizAnswer key={answer.id} answerTitle={index + 1} id={answer.id} />
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
