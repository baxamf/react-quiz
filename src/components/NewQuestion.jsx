import { useDispatch } from "react-redux";
import { useAddQuizQuestionMutation } from "../features/api/quizApi";
import { resetQuestion } from "../features/quiz/questionSlice";
import FormQuestion from "./FormQuestion";

export default function NewQuestion() {
  const dispatch = useDispatch();
  const [addQuestionQuery] = useAddQuizQuestionMutation();

  const onSaveQuestion = async (question) => {
    await addQuestionQuery(question);
    dispatch(resetQuestion());
  };

  return <FormQuestion submitHandler={onSaveQuestion} />;
}
