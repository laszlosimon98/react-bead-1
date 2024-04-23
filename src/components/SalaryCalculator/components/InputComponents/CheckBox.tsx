import { ReactElement } from "react";

type CheckBoxProps = {
  label: string;
  handleClick: () => void;
  checked: boolean;
};

const CheckBox = ({
  label,
  handleClick,
  checked,
}: CheckBoxProps): ReactElement => {
  return (
    <label className="my-1 sm:my-0 flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleClick}
        className="relative w-11 h-6 bg-zinc-400 rounded-full appearance-none cursor-pointer after:bg-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:rounded-full after:h-5 after:w-5 after:transition-all checked:after:translate-x-full checked:bg-zinc-600 "
      />
      <span className="ms-3 text-sm font-medium">{label}</span>
    </label>
  );
};

export default CheckBox;
