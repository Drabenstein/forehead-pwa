import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAnswerState, selectNextQuestion } from "../state/gameSlice";
import QuestionCard from "./components/QuestionCard";
import PostQuestionScreen from "./components/PostQuestionScreen";

const Game = () => {
  const nextQuestion = useSelector(selectNextQuestion);
  const answerState = useSelector(selectAnswerState);

  if (!nextQuestion && answerState === "") {
    return <Navigate to="/summary" replace />;
  }

  if (answerState !== "") {
    return <PostQuestionScreen type={answerState} />;
  }

  return <QuestionCard question={nextQuestion} time={60} />;
};

export default Game;
