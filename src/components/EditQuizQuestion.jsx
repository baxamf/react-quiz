import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  useAddQuizQuestionMutation,
  useGetQuizQuestionQuery,
  useUpdateQuestionMutation,
} from "../features/api/quizApi";
import { resetQuestion, setQuestion } from "../features/quiz/questionSlice";
import Error from "./Error";
import FormQuestion from "./FormQuestion";

export default function EditQuestion() {
  const { quizId } = useParams();
  const dispatch = useDispatch();
  const {
    data: question,
    isError,
    isLoading,
    refetch,
  } = useGetQuizQuestionQuery(quizId);
  const [updateQuestion] = useUpdateQuestionMutation();

  useEffect(() => {
    question && dispatch(setQuestion(question));
  }, [question]);

  const onEditQuestion = async (question) => {
    await updateQuestion(quizId, question);
    dispatch(resetQuestion());
  };

  if (isError) {
    return <Error handler={refetch} />;
  }
  if (isLoading) {
    return <CircularProgress />;
  }

  return <>{question && <FormQuestion submitHandler={onEditQuestion} />}</>;
}
