import { LeftCounter } from "./CounterComponents/LeftCounter";
import { RightCounter } from "./CounterComponents/RightCounter";
import { Dispatch, ReactElement, SetStateAction } from "react";

type CounterProps = {
  maxValue: number;
  setMaxValue: Dispatch<SetStateAction<number>>;
  setCounter: Dispatch<SetStateAction<number>>;
  counter: number;
  children: string | ReactElement;
};

const Counter = ({
  maxValue,
  setMaxValue,
  setCounter,
  counter,
  children,
}: CounterProps) => {
  return (
    <>
      <LeftCounter setCounter={setCounter} setMaxValue={setMaxValue} />
      {children}
      <RightCounter counter={counter} maxValue={maxValue} />
    </>
  );
};

export default Counter;
