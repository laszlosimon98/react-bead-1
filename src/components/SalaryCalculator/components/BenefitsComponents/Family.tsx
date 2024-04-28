import { ReactElement } from "react";
import CheckBox from "../InputComponents/CheckBox";
import Dependents from "./Dependents/Dependents";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import {
  MemberState,
  updateMember,
  updateNet,
} from "../../../../store/features/members/membersSlice";

const Family = (): ReactElement => {
  const selectedMember: MemberState = useAppSelector((state) =>
    state.members.find((member) => member.isSelected)
  ) as MemberState;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      updateMember({
        property: "isFamilyChecked",
        value: !selectedMember.isFamilyChecked,
      })
    );
    dispatch(updateNet());
  };
  return (
    <div className="h-14 flex flex-col justify-between">
      <CheckBox
        label="Családi kedvezmény"
        handleClick={handleClick}
        checked={selectedMember.isFamilyChecked}
      />
      {selectedMember.isFamilyChecked && <Dependents />}
    </div>
  );
};

export default Family;
