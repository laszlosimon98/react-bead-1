import { ReactElement } from "react";
import {
  MemberState,
  updateMember,
  updateNet,
} from "../../../../store/features/members/membersSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { getSelectedMember } from "../../../../store/features/members/memberUtil";

type PercentButtonProps = {
  value: number;
};

const PercentButton = ({ value }: PercentButtonProps): ReactElement => {
  const selectedMember: MemberState = useAppSelector((state) =>
    getSelectedMember(state)
  );

  const dispatch = useAppDispatch();

  const handleClick = () => {
    const salary =
      selectedMember.bsalary +
      Math.round(selectedMember.bsalary * (value / 100));

    dispatch(updateMember({ property: "bsalary", value: salary }));
    dispatch(updateNet());
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-zinc-600 py-1 px-2 my-1 mx-1 text-white rounded-md font-semibold hover:bg-zinc-800 active:bg-zinc-500 cursor-pointer h-[2rem] w-[3rem]"
      >
        {value > 0 ? "+" + value : value}%
      </button>
    </>
  );
};

export default PercentButton;
