import { LeftCounter } from "./CounterComponents/LeftCounter";
import { RightCounter } from "./CounterComponents/RightCounter";
import { ReactElement } from "react";

type CounterProps = {
  children: ReactElement;
};

const Counter = ({ children }: CounterProps): ReactElement => {
  return (
    <>
      <LeftCounter />
      {children}
      <RightCounter />
    </>
  );
};

export default Counter;
