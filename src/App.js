import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="create">Create Quiz</Link>
      <Link to="pass">Pass Quiz</Link>
    </div>
  );
}

export default App;
