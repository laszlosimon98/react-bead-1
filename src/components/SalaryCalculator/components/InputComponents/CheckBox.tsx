import { Dispatch, ReactElement, SetStateAction } from "react";

type CheckBoxProps = {
  label: string;
  handleClick: () => void;
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
};

const CheckBox = ({
  label,
  handleClick,
  status,
  setStatus,
}: CheckBoxProps): ReactElement => {
  const handleChange = () => {
    setStatus(!status);
  };

  return (
    <label className="my-1 sm:my-0 inline-flex items-center w-11/12">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        onClick={() => {
          handleChange();
          handleClick();
        }}
        className="relative w-11 h-6 bg-zinc-400 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-600"
      ></div>
      <span className="ms-3 text-sm font-medium">{label}</span>
    </label>
  );
};

export default CheckBox;
