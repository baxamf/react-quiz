import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetQuizQuestionQuery,
  useUpdateQuestionMutation,
} from "../features/api/quizApi";
import { setQuestion } from "../features/quiz/questionSlice";
import { hasCorrect } from "../services/hasCorrect";
import Error from "./Error";
import FormQuestion from "./FormQuestion";

export default function EditQuestion() {
  const { quizId } = useParams();
  const navigate = useNavigate();
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

  const onEditQuestion = async (update) => {
    if (hasCorrect(update.answers)) {
      await updateQuestion({ ...update, id: quizId });
      navigate("/create");
    } else {
      alert("Need 1 correct answer at least");
    }
  };

  const refresh = () => {
    question && dispatch(setQuestion(question));
  };

  return (
    <>
      {isError && <Error handler={refetch} />}
      {isLoading && <CircularProgress />}
      {question && (
        <FormQuestion refresh={refresh} submitHandler={onEditQuestion} />
      )}
    </>
  );
}
