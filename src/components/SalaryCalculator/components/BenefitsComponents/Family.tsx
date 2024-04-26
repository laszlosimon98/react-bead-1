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
    state.members.find((member) => member.selected)
  ) as MemberState;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      updateMember({ property: "family", value: !selectedMember.family })
    );
    dispatch(updateNet());
  };
  return (
    <div className="h-14 flex flex-col justify-between">
      <CheckBox
        label="Családi kedvezmény"
        handleClick={handleClick}
        checked={selectedMember.family}
      />
      {selectedMember.family && <Dependents />}
    </div>
  );
};

export default Family;
