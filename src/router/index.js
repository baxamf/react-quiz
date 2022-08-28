import { Routes, Route } from "react-router-dom";
import App from "../App";
import PassQuiz from "../pages/PassQuiz";
import QuizLayout from "../components/QuizLayout";
import NewQuestion from "../components/NewQuestion";
import EditQuestion from "../components/EditQuizQuestion";

export default function QuizRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="create" element={<QuizLayout />}>
        <Route index element={<NewQuestion />} />
        <Route path=":quizId" element={<EditQuestion />} />
      </Route>

      <Route path="pass" element={<PassQuiz />}>
        <Route path=":quizId" element={<NewQuestion />} />
      </Route>
    </Routes>
  );
}
