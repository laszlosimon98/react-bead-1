import { ReactElement } from "react";
import CheckBox from "../InputComponents/CheckBox";
import {
  MemberState,
  updateMember,
  updateNet,
} from "../../../../store/features/members/membersSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";

const PersonalTax = (): ReactElement => {
  const selectedMember: MemberState = useAppSelector((state) =>
    state.members.find((member) => member.selected)
  ) as MemberState;
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      updateMember({
        property: "personal",
        value: !selectedMember.personal,
      })
    );
    dispatch(updateNet());
  };

  return (
    <>
      <CheckBox
        label="Személyi adókedvezmény"
        handleClick={handleClick}
        checked={selectedMember.personal}
      />
    </>
  );
};

export default PersonalTax;
