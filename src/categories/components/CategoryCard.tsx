import { Card, CardBody, Center, Image, Heading } from "@chakra-ui/react";
import { Category } from "../../models/category";

import classes from "./CategoryCard.module.css";
import { useCallback } from "react";

type CategoryCardProps = {
  category: Category;
  onCardClick: (category: string) => void;
};

const CategoryCard = ({ category, onCardClick }: CategoryCardProps) => {
  const onCardClickCallback = useCallback(() => {
    onCardClick(category.name);
  }, [category.name, onCardClick]);

  return (
    <Card
      bg="blanchwhite"
      onClick={onCardClickCallback}
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
  );
};

export default CategoryCard;
