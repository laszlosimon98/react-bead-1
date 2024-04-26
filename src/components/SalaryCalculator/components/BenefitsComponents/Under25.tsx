import { ReactElement } from "react";
import CheckBox from "../InputComponents/CheckBox";
import {
  MemberState,
  updateMember,
  updateNet,
} from "../../../../store/features/members/membersSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";

const Under25 = (): ReactElement => {
  const selectedMember: MemberState = useAppSelector((state) =>
    state.members.find((member) => member.selected)
  ) as MemberState;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      updateMember({
        property: "under25",
        value: !selectedMember.under25,
      })
    );
    dispatch(updateNet());
  };

  return (
    <>
      <CheckBox
        label="25 év alattiak SZJA mentessége"
        handleClick={handleClick}
        checked={selectedMember.under25}
      />
    </>
  );
};

export default Under25;
