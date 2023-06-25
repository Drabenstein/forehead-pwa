import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectNextQuestion } from "../state/gameSlice";
import QuestionCard from "./components/QuestionCard";

const Game = () => {
  const nextQuestion = useSelector(selectNextQuestion);

  if (!nextQuestion) {
    return <Navigate to="/summary" replace={true} />;
  }

  return (
    <QuestionCard question={nextQuestion} key={nextQuestion.id} time={60} />
  );
};

export default Game;
