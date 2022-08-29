import { useDispatch } from "react-redux";
import { useAddQuizQuestionMutation } from "../features/api/quizApi";
import { resetQuestion } from "../features/quiz/questionSlice";
import { hasCorrect } from "../services/hasCorrect";
import FormQuestion from "./FormQuestion";

export default function NewQuestion() {
  const dispatch = useDispatch();
  const [addQuestionQuery] = useAddQuizQuestionMutation();

  const onSaveQuestion = async (question) => {
    if (hasCorrect(question.answers)) {
      await addQuestionQuery(question);
      dispatch(resetQuestion());
    } else {
      alert("Need at least 1 correct & 1 wrong answers");
    }
  };

  return <FormQuestion submitHandler={onSaveQuestion} />;
}
