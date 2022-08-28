import { Grid, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FormAnswer from "./FormAnswer";
import { useAddQuizQuestionMutation } from "../features/api/quizApi";
import {
  addAnswer,
  resetQuestion,
  selectQuestion,
} from "../features/quiz/questionSlice";
import FormQuestion from "./FormQuestion";

export default function NewQuestion() {
  const dispatch = useDispatch();
  const question = useSelector(selectQuestion);
  const [addQuestionQuery] = useAddQuizQuestionMutation();

  const onSaveQuestion = async (question) => {
    await addQuestionQuery(question);
    dispatch(resetQuestion());
  };

  return (
    <FormQuestion
      question={question}
      submitHandler={onSaveQuestion}
      title="Create new Question"
    />
  );
}
