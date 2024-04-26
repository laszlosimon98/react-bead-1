import { ChangeEvent, ReactElement } from "react";
import {
  MemberState,
  updateMember,
  updateNet,
} from "../../../../store/features/members/membersSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";

const Slider = (): ReactElement => {
  const selectedMember: MemberState = useAppSelector((state) =>
    state.members.find((member) => member.selected)
  ) as MemberState;

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateMember({ property: "bsalary", value: parseInt(e.target.value) })
    );
    dispatch(updateNet());
  };

  return (
    <>
      <input
        type="range"
        min={100}
        max={2000000}
        step={1}
        value={selectedMember.bsalary}
        className="w-full sm:w-[25rem] md:w-[30rem] lg:w-[25rem] accent-zinc-600 "
        onChange={handleChange}
      />
    </>
  );
};

export default Slider;
