import {
  Box,
  Center,
  Flex,
  Heading,
  Progress,
} from "@chakra-ui/react";
import { FC, ReactElement, useEffect } from "react";
import QuestionCardBottomBar from "./QuestionCardBottomBar";
import { useCountdown } from "../../hooks/useCountdown";
import { useLongPress } from "../../hooks/useLongPress";
import { useDispatch } from "react-redux";
import { markAsBadAnswer, markAsGoodAnswer } from "../../state/gameSlice";

type QuestionCardProps = {
  question: Question;
  time: number;
};

const QuestionCard: FC<QuestionCardProps> = ({
  question,
  time
}): ReactElement => {
  const dispatch = useDispatch();
  const millisecondsLeft = useCountdown(time);

  const progressBarValue = ((millisecondsLeft / 1000) / time) * 100;
  const progressBarColor = progressBarValue >= 50 ? "green" : progressBarValue >= 25 ? "yellow" : "red";

  const secondsLeft = Math.ceil(millisecondsLeft / 1000);

  const callback = (side : string) => {
    console.log('clicked ' + side);
    if (side == 'left') {
      dispatch(markAsGoodAnswer(question));
    } else if (side == 'right') {
      dispatch(markAsBadAnswer(question));
    }
  }

  useEffect(() => {
    if (millisecondsLeft <= 0) {
      dispatch(markAsBadAnswer(question));
    }
  }, [millisecondsLeft, question, dispatch]);

  const longPressHandlers = useLongPress(callback);

  return (
    <Flex
      style={{
        width: "100%",
        height: "100vh",
        background:
          "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(55,55,245,0.9960316890428046) 0%, rgba(0,230,255,1) 100%)",
      }}
      p="3"
      direction="column"
      {...longPressHandlers}
    >
      <Center h="100%">
        <Heading
          size="3xl"
          color="white"
          dropShadow="5px 5px #ff0000"
          noOfLines={2}
          lineHeight="5rem"
          textAlign="center"
        >
          {question.text}
        </Heading>
      </Center>
      <Flex alignItems="center" mb="2">
        <QuestionCardBottomBar
          author={question.authorName}
          helperText={question.helperText}
          secondsLeft={secondsLeft}
        />
      </Flex>
      <Box ml="-3" mr="-3" mb="-3">
        <Progress colorScheme={progressBarColor} size="md" value={progressBarValue} />
      </Box>
    </Flex>
  );
};

export default QuestionCard;
