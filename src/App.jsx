import React from "react";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-[1rem] " >
      {/* main container */}
      <div className="shadow-2xl rounded-xl p-5 w-[100%]  md:w-[50%]">
        <h1 className="text-3xl text-center font-bold">Quiz App</h1>
        <Quiz />
      </div>
    </div>
  );
};

export default App;
