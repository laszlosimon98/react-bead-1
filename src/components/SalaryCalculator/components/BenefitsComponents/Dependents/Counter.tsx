import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, useState } from "react";

type CounterProps = {
  max?: number;
  setMax?: Dispatch<SetStateAction<number>>;
};

const Counter = ({ max, setMax }: CounterProps) => {
  const [count, setCount] = useState<number>(1);

  const handleIncrease = () => {
    if (max && count < max) {
      setCount(count + 1);
    }

    if (!max) {
      setCount(count + 1);
    }

    if (setMax) setMax(count);
  };

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="flex gap-2">
      <button
        className="w-4 h-4 sm:w-6 sm:h-6 text-xs sm:text-sm flex justify-center items-center rounded-full cursor-pointer bg-zinc-100 hover:bg-zinc-300 active:bg-zinc-200"
        onClick={handleDecrease}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>

      <p className="text-sm sm:text-base ">{count}</p>
      <button
        className="w-4 h-4 sm:w-6 sm:h-6 text-xs sm:text-sm flex justify-center items-center rounded-full cursor-pointer bg-zinc-100 hover:bg-zinc-300 active:bg-zinc-200"
        onClick={handleIncrease}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
