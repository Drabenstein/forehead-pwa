import { useEffect } from "react";
import { resetAnswerState } from "../../state/gameSlice";
import { useDispatch } from "react-redux";
import { Center, Flex, Heading } from "@chakra-ui/react";

import classes from "./PostQuestionScreen.module.css";

const getPostQuestionMessage = (type: string) => {
  if (type === "good") {
    return "Dobrze!";
  } else if (type === "bad") {
    return "Pasuję!";
  } else if (type === "timeout") {
    return "Czas minął!";
  } else {
    return "Błąd gry!";
  }
};

const getPostQuestionColor = (type: string) => {
  if (type === "good") {
    return classes.good;
  } else if (type === "bad") {
    return classes.bad;
  } else if (type === "timeout") {
    return classes.timeout;
  } else {
    return classes.error;
  }
};

const PostQuestionScreen = ({ type }: { type: string }) => {
  const message = getPostQuestionMessage(type);
  const backgroundColor = getPostQuestionColor(type);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(resetAnswerState());
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Flex
      className={`${backgroundColor} ${classes.screenContainer}`}
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
          {message}
        </Heading>
      </Center>
    </Flex>
  );
};

export default PostQuestionScreen;
