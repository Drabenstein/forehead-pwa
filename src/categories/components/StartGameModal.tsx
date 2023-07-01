import { Button } from "@chakra-ui/button";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { useState } from "react";

type StartGameModalProps = {
  isOpen: boolean;
  cancelRef: React.MutableRefObject<null>;
  onClose: () => void;
  selectedCategory: string;
  startGame: () => void;
};

const StartGameModal = ({
  isOpen,
  cancelRef,
  onClose,
  selectedCategory,
  startGame,
}: StartGameModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    await startGame();
  };

  return (
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
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default StartGameModal;
