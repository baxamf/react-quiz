export const hasCorrect = (answers) =>
  answers.some((answer) => answer.isCorrect === true) &&
  answers.some((answer) => answer.isCorrect === false);
