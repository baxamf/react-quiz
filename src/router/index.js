import { Routes, Route } from "react-router-dom";
import App from "../App";
import PassQuiz from "../pages/PassQuiz";
import CreateQuiz from "../pages/CreateQuiz";
import Home from "../pages/Home";
import { useSelector } from "react-redux";
import { selectQuiz } from "../features/quiz/quizSlice";

export default function QuizRouter() {
  const { role } = useSelector(selectQuiz);

  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        {role === "ADMIN" && <Route path="create" element={<CreateQuiz />} />}
        <Route path="pass" element={<PassQuiz />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
