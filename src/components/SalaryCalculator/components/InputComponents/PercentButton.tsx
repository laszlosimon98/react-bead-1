import { ReactElement } from "react";

type PercentButtonProps = {
  value: number;
};

const PercentButton = ({ value }: PercentButtonProps): ReactElement => {
  return (
    <>
      <button className="bg-zinc-600 py-1 px-2 my-1 mx-1 text-white rounded-md font-semibold hover:bg-zinc-800 active:bg-zinc-500 cursor-pointer h-[2rem] w-[3rem]">
        {value > 0 ? "+" + value : value}%
      </button>
    </>
  );
};

export default PercentButton;
