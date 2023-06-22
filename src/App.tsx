import {
  Card,
  CardBody,
  SimpleGrid,
  Image,
  Heading,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

import classes from "./App.module.css";
import { useNavigate } from "react-router-dom";

function App() {
  const categories = [
    {
      id: 1,
      name: "Harry Potter",
      imageUrl: "https://bit.ly/2Z4KKcF",
    },
    {
      id: 2,
      name: "Lord of the Rings",
      imageUrl:
        "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1241&q=80",
    },
    {
      id: 3,
      name: "Game of Thrones",
      imageUrl:
        "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1241&q=80",
    },
    {
      id: 4,
      name: "Star Wars",
      imageUrl:
        "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1241&q=80",
    },
    {
      id: 5,
      name: "Marvel",
      imageUrl:
        "https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1241&q=80",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const navigate = useNavigate();

  const onCardClick = (category: string) => {
    setSelectedCategory(category);
    onOpen();
  };

  const startGame = () => {
    navigate("/game");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#003eaa"
      }}
    >
      <SimpleGrid minChildWidth="200px" gap="6" backgroundColor="#003eaa" padding={5}>
        {categories.map((category) => (
          <Card
            key={category.id}
            bg="gray.300"
            onClick={() => onCardClick(category.name)}
            className={classes.categoryCard}
          >
            <CardBody justifyContent="center">
              <Image
                src={category.imageUrl}
                alt={category.name}
                borderRadius="lg"
                maxHeight="150"
              />
              <Heading size="md" textAlign="center" mt="3">
                {category.name}
              </Heading>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {selectedCategory}
            </AlertDialogHeader>

            <AlertDialogBody>
              Czy na pewno chcesz zacząć grę w kategorii {selectedCategory}?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Anuluj
              </Button>
              <Button colorScheme="blue" onClick={startGame} ml={3}>
                Zaczynamy
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}

export default App;
