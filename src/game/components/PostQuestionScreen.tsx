import { useEffect } from "react";
import { resetAnswerState } from "../../state/gameSlice";
import { useDispatch } from "react-redux";
import { Center, Flex, Heading } from "@chakra-ui/react";

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
  }
  
  const getPostQuestionColor = (type: string) => {
    if (type === "good") {
      return "green";
    } else if (type === "bad") {
      return "red";
    } else if (type === "timeout") {
      return "gold";
    } else { 
      return "black";
    }
  }
  
  const PostQuestionScreen = ({ type } : { type: string }) => {
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
        style={{
          width: "100%",
          height: "100%",
          background: backgroundColor
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
            {message}
          </Heading>
        </Center>
      </Flex>
    );
  };

export default PostQuestionScreen;