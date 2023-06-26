import { useSelector } from "react-redux";
import { selectBadAnswers, selectGoodAnswers } from "../state/gameSlice";
import {
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Summary = () => {
  const goodAnswers = useSelector(selectGoodAnswers);
  const badAnswers = useSelector(selectBadAnswers);
  const navigate = useNavigate();

  const handleBackToCategories = () => {
    navigate("/", { replace: true });
  };

  return (
    <Grid gridColumn={2} gridRow={1} gap={2} bgColor="cyan.100" p={3}>
      <GridItem gridColumn={1} gridRow={1} my={3}>
        <Center>
          <Heading color="green.400">Poprawne</Heading>
        </Center>
      </GridItem>
      <GridItem gridColumn={2} gridRow={1} my={3}>
        <Center>
          <Heading color="red.400">Błędne</Heading>
        </Center>
      </GridItem>
      {goodAnswers.map((answer, index) => (
        <GridItem
          key={index}
          gridColumn={1}
          gridRow={index + 2}
          bg="green.200"
          borderRadius="md"
          p={2}
        >
          {answer.text}
        </GridItem>
      ))}
      {badAnswers.map((answer, index) => (
        <GridItem
          key={index}
          gridColumn={2}
          gridRow={index + 2}
          bg="red.200"
          borderRadius="md"
          p={2}
        >
          {answer.text}
        </GridItem>
      ))}
      <GridItem colSpan={2}>
        <Center>
          <Button
            width="100%"
            colorScheme="teal"
            variant="solid"
            fill="true"
            mt={3}
            onClick={handleBackToCategories}
          >
            Powrót do kategorii
          </Button>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default Summary;
