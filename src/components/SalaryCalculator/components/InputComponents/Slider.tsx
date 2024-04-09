import { ChangeEvent, ReactElement } from "react";
import { useMemberContext } from "../../../../hooks/useMemberContext";

const Slider = (): ReactElement => {
  const { setMembers, selectedMember, updateMembers } = useMemberContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMembers(updateMembers("bsalary", parseInt(e.target.value)));
  };

  return (
    <>
      <input
        type="range"
        min={100}
        max={2000000}
        step={1}
        value={selectedMember().bsalary}
        className="w-full sm:w-[25rem] md:w-[30rem] lg:w-[25rem] accent-zinc-600 "
        onChange={handleChange}
      />
    </>
  );
};

export default Slider;
