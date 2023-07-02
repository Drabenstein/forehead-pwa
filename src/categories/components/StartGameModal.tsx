import { Button } from "@chakra-ui/button";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { useCallback, useState } from "react";

type StartGameModalProps = {
  isOpen: boolean;
  cancelRef: React.MutableRefObject<null>;
  onClose: () => void;
  selectedCategory: string;
  startGame: () => void;
};

type StartGameModalFooterProps = {
  cancelRef: React.MutableRefObject<null>;
  onClose: () => void;
  startGame: () => void;
};

const StartGameModalHeader = ({
  selectedCategory,
}: {
  selectedCategory: string;
}) => {
  return (
    <AlertDialogHeader fontSize="lg" fontWeight="bold">
      {selectedCategory}
    </AlertDialogHeader>
  );
};

const StartGameModalBody = ({
  selectedCategory,
}: {
  selectedCategory: string;
}) => {
  return (
    <AlertDialogBody>
      Czy na pewno chcesz zacząć grę w kategorii {selectedCategory}?
    </AlertDialogBody>
  );
};

const StartGameModalFooter = ({
  cancelRef,
  onClose,
  startGame,
}: StartGameModalFooterProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(() => {
    setIsLoading(true);
    startGame();
  }, [startGame]);

  return (
    <AlertDialogFooter>
      <Button ref={cancelRef} isDisabled={isLoading} onClick={onClose}>
        Anuluj
      </Button>
      <Button
        colorScheme="green"
        isLoading={isLoading}
        onClick={onSubmit}
        ml={3}
      >
        Zaczynamy
      </Button>
    </AlertDialogFooter>
  );
};

const StartGameModal = ({
  isOpen,
  cancelRef,
  onClose,
  selectedCategory,
  startGame,
}: StartGameModalProps) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <StartGameModalHeader selectedCategory={selectedCategory} />
          <StartGameModalBody selectedCategory={selectedCategory} />
          <StartGameModalFooter
            cancelRef={cancelRef}
            onClose={onClose}
            startGame={startGame}
          />
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default StartGameModal;
