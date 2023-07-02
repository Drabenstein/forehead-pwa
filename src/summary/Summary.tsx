import { useSelector } from "react-redux";
import { selectBadAnswers, selectGoodAnswers } from "../state/gameSlice";
import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import classes from "./Summary.module.css";
import { useCallback } from "react";

type AnswerColumnProps = {
  answers: { id: number; text: string }[];
  color: string;
};

const AnswerColumn = ({ answers, color }: AnswerColumnProps) => {
  return (
    <Flex direction="column" gap={4} w="50%">
      <Center>
        <Heading color={color} textDecoration="underline">
          Poprawne
        </Heading>
      </Center>
      {answers.map((answer) => (
        <Center key={answer.id}>
          <Text
            fontWeight="bold"
            fontSize="xl"
            textColor={color}
            textAlign="center"
          >
            {answer.text}
          </Text>
        </Center>
      ))}
    </Flex>
  );
};

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackToCategories = useCallback(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <Center bgColor="ghostwhite" mt={2}>
      <Button
        width="100%"
        colorScheme="twitter"
        variant="solid"
        fill="true"
        mt={3}
        onClick={handleBackToCategories}
      >
        Powrót do kategorii
      </Button>
    </Center>
  );
};

const Summary = () => {
  const goodAnswers = useSelector(selectGoodAnswers);
  const badAnswers = useSelector(selectBadAnswers);

  return (
    <div className={classes.summaryContainer}>
      <Flex bgColor="ghostwhite" direction="column" p={4}>
        <Flex
          direction="row"
          justifyContent="space-around"
          bgColor="ghostwhite"
        >
          <AnswerColumn answers={goodAnswers} color="green.400" />
          <AnswerColumn answers={badAnswers} color="red.400" />
        </Flex>
        <BackButton />
      </Flex>
    </div>
  );
};

export default Summary;
