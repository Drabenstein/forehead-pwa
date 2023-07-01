import { useRef, useState } from "react";
import { useAsyncValue, useNavigate } from "react-router";
import { Category } from "../../models/category";
import { useDisclosure } from "@chakra-ui/hooks";
import { SimpleGrid } from "@chakra-ui/layout";
import CategoryCard from "./CategoryCard";
import StartGameModal from "./StartGameModal";

import classes from "./CategoriesView.module.css";

const CategoriesView = () => {
  const categories = useAsyncValue() as Category[];

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
        {categories.map((category: Category) => (
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

export default CategoriesView;
