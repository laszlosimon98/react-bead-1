import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";

type TemplateProps = {
  handleDecrease: MouseEventHandler<HTMLButtonElement>;
  handleIncrease: MouseEventHandler<HTMLButtonElement>;
  count: number;
};
const Template = ({ handleDecrease, handleIncrease, count }: TemplateProps) => {
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

export default Template;
