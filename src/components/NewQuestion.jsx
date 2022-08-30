import { useDispatch } from "react-redux";
import useError from "../app/hooks/useError";
import { useAddQuizQuestionMutation } from "../features/api/quizApi";
import { resetQuestion } from "../features/quiz/questionSlice";
import { hasCorrect } from "../services/hasCorrect";
import FormQuestion from "./FormQuestion";

export default function NewQuestion() {
  const dispatch = useDispatch();
  const [addQuestionQuery] = useAddQuizQuestionMutation();
  const { error, setError, ErrorWindow } = useError();

  const onSaveQuestion = async (question) => {
    if (hasCorrect(question.answers)) {
      await addQuestionQuery(question);
      dispatch(resetQuestion());
    } else {
      setError(true);
    }
  };

  return (
    <>
      {error && ErrorWindow("Need at least 1 correct & 1 wrong answers")}
      <FormQuestion submitHandler={onSaveQuestion} />
    </>
  );
}
