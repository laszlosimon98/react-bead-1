import { ReactElement } from "react";
import CheckBox from "../InputComponents/CheckBox";
import {
  MemberState,
  updateMember,
  updateNet,
} from "../../../../store/features/members/membersSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { getSelectedMember } from "../../../../store/features/members/memberUtil";

const Under25 = (): ReactElement => {
  const selectedMember: MemberState = useAppSelector((state) =>
    getSelectedMember(state)
  );
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      updateMember({
        property: "isUnder25Checked",
        value: !selectedMember.isUnder25Checked,
      })
    );
    dispatch(updateNet());
  };

  return (
    <>
      <CheckBox
        label="25 év alattiak SZJA mentessége"
        handleClick={handleClick}
        checked={selectedMember.isUnder25Checked}
      />
    </>
  );
};

export default Under25;
