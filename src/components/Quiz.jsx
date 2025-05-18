import React, { useState } from "react";
import { questionBank } from "../questionBank";
import Result from "./Result";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([null, null, null]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  const optionPicked = userAnswers[currentQuestion];

  const handleSelectOption = (option) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;
    setUserAnswers(newUserAnswers);
    console.log(userAnswers);
  };

  const nextQn = () => {
    if (!optionPicked) {
      alert("Pick an option..");
      return;
    }
    if (currentQuestion === questionBank.length - 1) {
      setQuizDone(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const prevQn = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const resetQuiz = () => {
    setUserAnswers([]);
    setCurrentQuestion(0);
    setQuizDone(false);
  };

  if (quizDone) {
    return (
      <Result
        userAnswers={userAnswers}
        questionBank={questionBank}
        currentQuestion={currentQuestion}
        resetQuiz={resetQuiz}
      />
    );
  }

  return (
    // Strucuture for reference
    // <div>
    //   <h2>Question 1</h2>
    //   <p>What is React?</p>
    //   <button>Library</button>
    //   <button>Framework</button>
    //   <button>Language</button>
    //   <button>None</button>
    //   <div>
    //     <button>Previous</button>
    //     <button>Next</button>
    //   </div>
    // </div>
    <div>
      <h2 className="text-xl font-semibold my-3 md:mt-0">Question {currentQuestion + 1}</h2>
      <p>{"Q. " + questionBank[currentQuestion].question}</p>
      {questionBank[currentQuestion].options.map((option, index) => (
        <button
          className="mt-2 block border border-gray-200 rounded-lg p-3 mb-3 w-full cursor-pointer"
          key={index}
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}
      <div className="flex justify-between ">
        <button
          className="bg-blue-500 text-white font-bold p-2 rounded-xl cursor-pointer"
          onClick={prevQn}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white font-bold p-2 rounded-lg cursor-pointer"
          onClick={nextQn}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
