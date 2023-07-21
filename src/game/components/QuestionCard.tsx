import { Box, Center, Flex, Heading, Progress } from "@chakra-ui/react";
import { FC, ReactElement, useEffect } from "react";
import QuestionCardBottomBar from "./QuestionCardBottomBar";
import { useCountdown } from "../../hooks/useCountdown";
import { useLongPress } from "../../hooks/useLongPress";
import { useDispatch } from "react-redux";
import {
  markAsBadAnswer,
  markAsGoodAnswer,
  markAsTimeout,
} from "../../state/gameSlice";

import classes from "./QuestionCard.module.css";

type QuestionCardProps = {
  question: Question;
  time: number;
};

const QuestionCard: FC<QuestionCardProps> = ({
  question,
  time,
}): ReactElement => {
  const dispatch = useDispatch();
  const millisecondsLeft = useCountdown(time);

  const progressBarValue = (millisecondsLeft / 1000 / time) * 100;
  const progressBarColor =
    progressBarValue >= 50
      ? "green"
      : progressBarValue >= 25
      ? "yellow"
      : "red";

  const secondsLeft = Math.ceil(millisecondsLeft / 1000);

  const callback = (side: string) => {
    if (side === "left") {
      dispatch(markAsGoodAnswer(question));
    } else if (side === "right") {
      dispatch(markAsBadAnswer(question));
    }
  };

  useEffect(() => {
    if (millisecondsLeft <= 0) {
      dispatch(markAsTimeout(question));
    }
  }, [millisecondsLeft, question, dispatch]);

  const longPressHandlers = useLongPress(callback);

  return (
    <Flex
      className={classes.questionCardContainer}
      p="3"
      direction="column"
      {...longPressHandlers}
    >
      <Center h="100%">
        <Heading
          size="3xl"
          color="white"
          dropShadow="5px 5px #ff0000"
          noOfLines={3}
          lineHeight="5rem"
          textAlign="center"
          className={classes.unselectable}
        >
          {question.text}
        </Heading>
      </Center>
      <Flex
        alignItems="bottom"
        mb="2"
        justifyContent={"space-between"}
        className={classes.unselectable}
      >
        <QuestionCardBottomBar
          author={question.authorName}
          helperText={question.helperText}
          secondsLeft={secondsLeft}
        />
      </Flex>
      <Box ml="-3" mr="-3" mb="-3" className={classes.unselectable}>
        <Progress
          colorScheme={progressBarColor}
          size="md"
          value={progressBarValue}
          className={classes.unselectable}
        />
      </Box>
    </Flex>
  );
};

export default QuestionCard;
