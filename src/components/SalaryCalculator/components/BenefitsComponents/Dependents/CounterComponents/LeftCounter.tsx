import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Template from "./Template";

type LeftCounterProps = {
  setCounter: Dispatch<SetStateAction<number>>;
  setMaxValue: Dispatch<SetStateAction<number>>;
};

export const LeftCounter = ({ setCounter, setMaxValue }: LeftCounterProps) => {
  const [count, setCount] = useState<number>(1);
  const [decreasing, setDecreasing] = useState<boolean>(false);

  useEffect(() => {
    setMaxValue(count);
  }, [count, setMaxValue]);

  useEffect(() => {
    setCounter(count);
  }, [decreasing, setCounter]);

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
    if (count <= 3) {
      setDecreasing(!decreasing);
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Template
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        count={count}
      />
    </>
  );
};
