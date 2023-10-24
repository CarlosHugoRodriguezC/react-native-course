import { useState } from "react";

interface Options {
  initialCounter?: number;
}

export const useCounter = ({ initialCounter = 10 }: Options) => {
  const [counter, setCounter] = useState<number>(initialCounter);

  const increaseBy = (value: number): void => {
    if (counter + value < 0) return;

    setCounter(counter + value);
  };

  return {
    counter,
    setCounter,
    increaseBy,
  };
};
