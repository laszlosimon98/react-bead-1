import { useState, useEffect } from "react";
import Template from "./Template";

type RightCounterProps = {
  maxValue: number;
  counter: number;
};

export const RightCounter = ({ counter, maxValue }: RightCounterProps) => {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    setCount(counter);
  }, [counter]);

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    if (count < 3 && count < maxValue) {
      setCount((count) => count + 1);
    }
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
