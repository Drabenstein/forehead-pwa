import { Center, Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

const GlobalSpinnerFallback = () => {
  return (
    <Flex
      p="3"
      h="100%"
      w="100$"
      backgroundColor="ghostwhite"
      direction="column"
    >
      <Center h="100%">
        <Spinner size="xl" color="green.500" thickness="5px" />
      </Center>
    </Flex>
  );
};

export default GlobalSpinnerFallback;
