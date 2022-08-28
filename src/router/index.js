import { Routes, Route } from "react-router-dom";
import App from "../App";
import CreateQuiz from "../pages/CreateQuiz";
import EditQuizQuestion from "../components/EditQuizQuestion";
import PassQuiz from "../pages/PassQuiz";
import QuizLayout from "../components/QuizLayout";
import NewQuestion from "../components/NewQuestion";

export default function QuizRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="create" element={<QuizLayout />}>
        <Route index element={<CreateQuiz />} />
        <Route path=":quizId" element={<NewQuestion />} />
        <Route path="new" element={<NewQuestion />} />
      </Route>

      <Route path="pass" element={<PassQuiz />}>
        <Route path=":quizId" element={<NewQuestion />} />
      </Route>
    </Routes>
  );
}
