import { Routes, Route } from "react-router-dom";
import App from "../App";
import PassQuiz from "../pages/PassQuiz";
import NewQuestion from "../components/NewQuestion";
import EditQuestion from "../components/EditQuizQuestion";
import CreateQuiz from "../pages/CreateQuiz";

export default function QuizRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="create" element={<CreateQuiz />}>
        <Route index element={<NewQuestion />} />
        <Route path=":quizId" element={<EditQuestion />} />
      </Route>

      <Route path="pass" element={<PassQuiz />}>
        <Route path=":quizId" element={<NewQuestion />} />
      </Route>
    </Routes>
  );
}
