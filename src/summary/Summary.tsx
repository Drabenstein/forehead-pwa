import { useSelector } from "react-redux";
import { selectBadAnswers, selectGoodAnswers } from "../state/gameSlice";
import {
  Button,
  Center,
  Flex,
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
    <div style={{ width: "100%", height: "100%" }}>
      <Flex bgColor="ghostwhite" direction="column" p={4}>
        <Flex
          direction="row"
          justifyContent="space-around"
          bgColor="ghostwhite"
        >
          <Flex direction="column" gap={4} w="50%" >
            <Center>
              <Heading color="green.400" textDecoration="underline">
                Poprawne
              </Heading>
            </Center>
            {goodAnswers.map((answer, index) => (
              <Center key={index}>
                <Text
                  fontWeight="bold"
                  fontSize="xl"
                  textColor="green.400"
                  textAlign="center"
                >
                  {answer.text}
                </Text>
              </Center>
            ))}
          </Flex>
          <Flex direction="column" gap={4} w="50%">
            <Center>
              <Heading color="red.400" textDecoration="underline">
                Błędne
              </Heading>
            </Center>
            {badAnswers.map((answer, index) => (
              <Center key={index}>
                <Text
                  fontWeight="bold"
                  fontSize="xl"
                  textColor="red.400"
                  textAlign="center"
                >
                  {answer.text}
                </Text>
              </Center>
            ))}
          </Flex>
        </Flex>
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
      </Flex>
    </div>
  );
};

export default Summary;
