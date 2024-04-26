import { ReactElement } from "react";
import Counter from "./Counter";

const Dependents = (): ReactElement => {
  return (
    <div className="flex gap-2 items-center">
      <Counter>
        <p className="text-xs sm:text-sm">Eltartott, ebből kedvezményezett: </p>
      </Counter>
    </div>
  );
};

export default Dependents;
