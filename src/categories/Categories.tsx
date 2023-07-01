import { SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Category } from "../models/category";

import classes from "./Categories.module.css";
import StartGameModal from "./components/StartGameModal";
import CategoryCard from "./components/CategoryCard";

const Categories = () => {
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
          <CategoryCard
            key={category.id}
            category={category}
            onCardClick={onCardClick}
          />
        ))}
      </SimpleGrid>
      <StartGameModal
        isOpen={isOpen}
        cancelRef={cancelRef}
        onClose={onClose}
        selectedCategory={selectedCategory}
        startGame={startGame}
      />
    </div>
  );
};

export default Categories;
