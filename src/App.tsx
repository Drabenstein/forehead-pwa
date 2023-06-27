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
  Center,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Category } from "./models/category";

import classes from "./App.module.css";

function App() {
  const categories: Category[] = useLoaderData() as Category[];

  const [selectedCategory, setSelectedCategory] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const navigate = useNavigate();

  const onCardClick = (category: string) => {
    setSelectedCategory(category);
    onOpen();
  };

  const startGame = () => {
    const selectedCategoryId = categories.find(
      (x) => x.name === selectedCategory
    )?.id;
    navigate(`/game/${selectedCategoryId}`);
  };

  return (
    <div className={classes.appContainer}>
      <SimpleGrid
        minChildWidth="200px"
        gap="6"
        backgroundColor="ghostwhite"
        padding={5}
      >
        {categories.map((category) => (
          <Card
            key={category.id}
            bg="blanchwhite"
            onClick={() => onCardClick(category.name)}
            className={classes.categoryCard}
          >
            <CardBody
              justifyContent="center"
              alignItems="center"
              justifyItems="center"
            >
              <Center>
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  borderRadius="lg"
                  maxHeight="150"
                />
              </Center>
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
              <Button colorScheme="green" onClick={startGame} ml={3}>
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
