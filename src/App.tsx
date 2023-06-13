import { FC, ReactElement } from "react";
import "./App.css";
import { useSwipeable } from "react-swipeable";
import QuestionCard from "./game/components/QuestionCard";

type Question = {
  id: string;
  text: string;
  helperText: string;
  author: string;
}

type GameHandlerProps = {
  questions: Question[];
}

const GameHandler : FC<GameHandlerProps> = ({questions}) : ReactElement => {
  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("swiped left"),
    onSwipedRight: () => console.log("swiped right"),
    onTap: () => console.log("tap"),
    preventScrollOnSwipe: true,
    trackMouse: true,
    trackTouch: true,
  });

  return (
    <div {...handlers}>
      <QuestionCard
        text="Alicja w krainie czarów - strasznie długie hasło"
        helperText="Bajka dla dzieci - jakiś dłuższy opis wskazówki"
        author="Amelia Procka"
        time={20}
      />
    </div>
  );
}

function App() {
  return <GameHandler></GameHandler>
}

export default App;
