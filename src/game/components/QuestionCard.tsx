import { Avatar, Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { FC, ReactElement, useEffect } from "react";
import useCountdownTimer from "../../hooks/useCountdownTimer";

type QuestionCardProps = {
  text: string;
  helperText: string;
  author: string;
  time: number;
};

const formatCountdown = (timeLeft: number) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft - minutes * 60;
  const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${secondsString}`;
};

const QuestionCard: FC<QuestionCardProps> = ({
  text,
  helperText,
  author,
  time,
}): ReactElement => {
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
          {text}
        </Heading>
      </Center>
      <Flex alignItems="center">
        <Box flexBasis="15%">
          <Avatar name={author} size="sm" />
        </Box>
        <Center flexBasis="70%">
          <Text fontSize="2xl" color="white">
            {formatCountdown(timeLeft)}
          </Text>
        </Center>
        <Box flexBasis="15%">
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color="white"
            textAlign="right"
          >
            {helperText}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default QuestionCard;
