import { useDispatch } from "react-redux";
import useError from "../../hooks/useError";
import {
  useAddQuizQuestionMutation,
  useUpdateQuestionMutation,
} from "../../features/quiz/quizApi";
import { resetQuestion } from "../../features/quiz/questionSlice";
import { hasCorrect } from "../../services/hasCorrect";
import FormQuestion from "./FormQuestion";

export default function Question() {
  const dispatch = useDispatch();
  const [addQuestionQuery] = useAddQuizQuestionMutation();
  const [updateQuestion] = useUpdateQuestionMutation();
  const { error, setError, ErrorWindow } = useError();

  const onSaveQuestion = async (question) => {
    if (hasCorrect(question.answers)) {
      question.id
        ? await updateQuestion(question)
        : await addQuestionQuery(question);
    } else {
      setError(true);
    }
    dispatch(resetQuestion());
  };

  return (
    <>
      {error && ErrorWindow("Need at least 1 correct & 1 wrong answers")}
      <FormQuestion submitHandler={onSaveQuestion} />
    </>
  );
}
