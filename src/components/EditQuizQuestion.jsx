import { useParams } from "react-router-dom";

export default function EditQuizQuestion() {
  const { quizId } = useParams();

  return <div>EditQuizQuestion {quizId}</div>;
}
