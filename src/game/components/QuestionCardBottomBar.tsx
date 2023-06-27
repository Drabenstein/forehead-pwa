import { Avatar, Box, Center, Flex, Spacer, Text } from "@chakra-ui/react";

type QuestionCardBottomBarProps = {
  helperText: string;
  author: string;
  secondsLeft: number;
};

const formatCountdown = (timeLeft: number) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft - minutes * 60;
  const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${secondsString}`;
};

const QuestionCardBottomBar = ({
  author,
  helperText,
  secondsLeft,
}: QuestionCardBottomBarProps) => {
  return (
    <>
      <Flex flexBasis="15%" flexGrow={0.5}>
        <Avatar name={author} size="sm" alignSelf="end" />
      </Flex>
      <Center flexBasis="15%" flexGrow={0.5}>
        <Text fontSize="xl" color="white" textAlign="center" alignSelf="end" fontWeight="bold">
          {formatCountdown(secondsLeft)}
        </Text>
      </Center>
      <Box flexBasis="15%" flexGrow={0.5}>
        <Text
          fontSize="md"
          fontWeight="semibold"
          color="white"
          textAlign="right"
          noOfLines={3}
        >
          {helperText}
        </Text>
      </Box>
    </>
  );
};

export default QuestionCardBottomBar;