import { ReactElement } from "react";
import CheckBox from "../InputComponents/CheckBox";
import Entitled from "./MarriedComponents/Entitled";
import MarriedDate from "./MarriedComponents/MarriedDate";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  MemberState,
  updateMember,
  updateNet,
} from "../../../../store/features/members/membersSlice";

const JustMarried = (): ReactElement => {
  const selectedMember: MemberState = useAppSelector((state) =>
    state.members.find((member) => member.isSelected)
  ) as MemberState;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      updateMember({
        property: "isJustMarriedChecked",
        value: !selectedMember.isJustMarriedChecked,
      })
    );
    dispatch(updateNet());
  };

  return (
    <div className="flex flex-col sm:flex-row w-full">
      <CheckBox
        label="Friss házasok kedvezménye"
        handleClick={handleClick}
        checked={selectedMember.isJustMarriedChecked}
      />

      {selectedMember.isJustMarriedChecked && (
        <div className="flex justify-center items-center gap-1 sm:justify-evenly sm:w-2/4">
          <MarriedDate />
          {selectedMember.hasMarriedDate && <Entitled />}
        </div>
      )}
    </div>
  );
};

export default JustMarried;
