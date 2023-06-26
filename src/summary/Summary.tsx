import { useSelector } from "react-redux";
import { selectBadAnswers, selectGoodAnswers } from "../state/gameSlice";
import {
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Text,
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
    <Grid gridColumn={2} gridRow={1} gap={1} bgColor="#edede9" p={3}>
      <GridItem gridColumn={1} gridRow={1} my={3}>
        <Center>
          <Heading color="green.400" textDecoration="underline">Poprawne</Heading>
        </Center>
      </GridItem>
      <GridItem gridColumn={2} gridRow={1} my={3}>
        <Center>
          <Heading color="red.400" textDecoration="underline">Błędne</Heading>
        </Center>
      </GridItem>
      {goodAnswers.map((answer, index) => (
        <GridItem
          key={index}
          gridColumn={1}
          gridRow={index + 2}
          borderRadius="md"
          p={2}
        >
          <Center>
            <Text fontWeight="bold" fontSize="xl" textColor="green.400">{answer.text}</Text>
          </Center>
        </GridItem>
      ))}
      {badAnswers.map((answer, index) => (
        <GridItem
          key={index}
          gridColumn={2}
          gridRow={index + 2}
          borderRadius="md"
          p={2}
        >
          <Center>
            <Text fontWeight="bold" fontSize="xl" textColor="red.400">{answer.text}</Text>
          </Center>
        </GridItem>
      ))}
      <GridItem colSpan={2}>
        <Center>
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
      </GridItem>
    </Grid>
  );
};

export default Summary;
