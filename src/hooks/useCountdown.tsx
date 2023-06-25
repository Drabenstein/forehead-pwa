import { MutableRefObject, useEffect, useRef, useState } from "react";

const useCountdown = (seconds: number) => {
  const [countDown, setCountDown] = useState(seconds * 1000);

  const intervalRef: MutableRefObject<NodeJS.Timer | undefined> = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCountDown((prev: number) => (prev > 0 ? prev - 100 : 0));
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [seconds]);

  return countDown;
};

export { useCountdown };
