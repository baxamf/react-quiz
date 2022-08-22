import { Routes, Route } from "react-router-dom";
import App from "../App";
import CreateQuiz from "../pages/CreateQuiz";
import EditQuizQuestion from "../components/EditQuizQuestion";
import PassQuiz from "../pages/PassQuiz";
import QuizQuestion from "../components/QuizQuestion";
import QuizList from "../components/QuizList";

export default function QuizRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="create" element={<CreateQuiz />}>
        <Route index element={<QuizList />} />
        <Route path=":quizId" element={<EditQuizQuestion />} />
      </Route>
      <Route path="pass" element={<PassQuiz />}>
        <Route path=":quizId" element={<QuizQuestion />} />
      </Route>
    </Routes>
  );
}
