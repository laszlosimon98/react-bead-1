import { ReactElement } from "react";
import { useMemberContext } from "../../../../hooks/useMemberContext";

type CheckBoxProps = {
  label: string;
  handleClick: () => void;
};

const CheckBox = ({ label, handleClick }: CheckBoxProps): ReactElement => {
  const { selectedMember } = useMemberContext();

  return (
    <label className="my-1 sm:my-0 inline-flex items-center w-11/12">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        onClick={handleClick}
        className={`relative w-11 h-6 bg-zinc-400 rounded-full after:bg-white rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:rounded-full after:h-5 after:w-5 after:transition-all ${
          selectedMember().under25
            ? "peer-checked:after:translate-x-full peer-checked:bg-zinc-600"
            : ""
        } `}
      ></div>
      <span className="ms-3 text-sm font-medium">{label}</span>
    </label>
  );
};

export default CheckBox;
