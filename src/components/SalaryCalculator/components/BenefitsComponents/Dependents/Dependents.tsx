import { ReactElement, useState } from "react";
import Counter from "./Counter";

const Dependents = (): ReactElement => {
  const [maxValue, setMaxValue] = useState<number>(1);
  const [counter, setCounter] = useState<number>(1);

  return (
    <div className="flex gap-2 items-center">
      <Counter
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        counter={counter}
        setCounter={setCounter}
      >
        <p className="text-xs sm:text-sm">Eltartott, ebből kedvezményezett: </p>
      </Counter>
    </div>
  );
};

export default Dependents;
