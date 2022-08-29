export default function compareAnswers(correct, playerAnswers) {
  if (correct.length !== playerAnswers.length) {
    return false;
  }

  let result = true;
  correct.forEach((correctAnswer) => {
    if (!playerAnswers.includes(correctAnswer)) {
      result = false;
    }
  });
  return result;
}
