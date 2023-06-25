import {
  MouseEventHandler,
  TouchEventHandler,
  useRef,
  MutableRefObject,
} from "react";

const useLongPress = (
  onLongPress: (side: string) => void,
  pressThreshold = 500
) => {
  const timerRef: MutableRefObject<NodeJS.Timeout | undefined> = useRef();
  const isLongPress: MutableRefObject<boolean> = useRef(false);
  const action = useRef("");
  const longPressSide = useRef("");

  const startPressTimer = () => {
    isLongPress.current = false;
    timerRef.current = setTimeout(() => {
      isLongPress.current = true;
      action.current = "long press";
      onLongPress(longPressSide.current);
    }, pressThreshold);
  };

  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    longPressSide.current =
      e.clientX > window.innerWidth / 2 ? "right" : "left";
    startPressTimer();
  };

  const onMouseUp: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    clearTimeout(timerRef.current!);
  };

  const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (isLongPress.current) {
      e.preventDefault();
      return;
    }
    action.current = "click";
  };

  const onTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    console.log("onTouchStart");
    e.preventDefault();
    longPressSide.current =
      e.changedTouches[0].clientX > window.innerWidth / 2 ? "right" : "left";
    startPressTimer();
  };

  const onTouchEnd: TouchEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    clearTimeout(timerRef.current!);
  };

  return { onClick, onMouseDown, onMouseUp, onTouchStart, onTouchEnd };
};

export { useLongPress };
