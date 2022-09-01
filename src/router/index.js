import { Routes, Route } from "react-router-dom";
import App from "../App";
import PassQuiz from "../pages/PassQuiz";
import CreateQuiz from "../pages/CreateQuiz";
import Home from "../pages/Home";

export default function QuizRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="create" element={<CreateQuiz />} />
        <Route path="pass" element={<PassQuiz />} />
      </Route>
    </Routes>
  );
}
