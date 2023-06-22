import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { selectQuestions, setQuestions } from "../state/gameSlice";

const pickRandomNElements = (arr: any[], n: number) =>
  [...arr].sort(() => 0.5 - Math.random()).slice(0, n);

const Game = () => {
  const allQuestions = useLoaderData() as Question[];
  const dispatch = useDispatch();
  const remainingQuestions = useSelector(selectQuestions);

  useEffect(() => {
    const chosenQuestions = pickRandomNElements(allQuestions, 10);
    dispatch(setQuestions(chosenQuestions));
  }, [allQuestions, dispatch]);

  return <>{remainingQuestions.map((question) => <div>Wpis {question.id}</div>)}</>;
};

export default Game;
