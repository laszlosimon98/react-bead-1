import { useState } from "react";
import Counter from "./Counter";

const Dependents = () => {
  const [max, setMax] = useState<number>(1);
  return (
    <div className="flex gap-2 items-center">
      <Counter setMax={setMax} />
      <p className="text-xs sm:text-sm">Eltartott, ebből kedvezményezett: </p>
      <Counter max={max} />
    </div>
  );
};

export default Dependents;
