import { Center, Flex, Heading } from "@chakra-ui/react";

import classes from "./ErrorPage.module.css";
import { isRouteErrorResponse, useRouteError } from "react-router";

const ErrorPage = ({ additionalErrorMessage }: { additionalErrorMessage?: string | undefined}) => {
  const error = useRouteError();

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = `[${error.status}] ${error.statusText} ${
      error.data.message ?? ""
    }`;
  } else if (additionalErrorMessage) {
    errorMessage = additionalErrorMessage;
  } else {
    errorMessage = "Coś nie pykło! We no odśwież stronę!";
  }

  return (
    <Flex
      className={classes + " " + classes.screenContainer}
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
          className={classes.unselectable}
        >
          Holy Guacamole!
        </Heading>
      </Center>
      <Center h="100%">
        <Heading
          size="xl"
          dropShadow="5px 5px #ff0000"
          noOfLines={2}
          lineHeight="5rem"
          textAlign="center"
          color="whitesmoke"
        >
          {errorMessage}
        </Heading>
      </Center>
    </Flex>
  );
};

export default ErrorPage;
