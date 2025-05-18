import React from "react";

const Result = ({ userAnswers, questionBank, resetQuiz }) => {
  const getScore = () => {
    let finalScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        finalScore++;
      }
    });
    return finalScore;
  };
  const score = getScore();
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Result</h2>
      <p className="text-xl">Score: {score}</p>
      <button
        className="bg-blue-500 text-white font-bold p-2 rounded-lg cursor-pointer mt-3"
        onClick={resetQuiz}
      >
        Restart
      </button>
    </div>
  );
};

export default Result;
