import { ReactElement } from "react";
import CheckBox from "../InputComponents/CheckBox";
import {
  MemberState,
  updateMember,
  updateNet,
} from "../../../../store/features/members/membersSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { getSelectedMember } from "../../../../store/features/members/memberUtil";

const PersonalTax = (): ReactElement => {
  const selectedMember: MemberState = useAppSelector((state) =>
    getSelectedMember(state)
  );
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      updateMember({
        property: "isPersonalChecked",
        value: !selectedMember.isPersonalChecked,
      })
    );
    dispatch(updateNet());
  };

  return (
    <>
      <CheckBox
        label="Személyi adókedvezmény"
        handleClick={handleClick}
        checked={selectedMember.isPersonalChecked}
      />
    </>
  );
};

export default PersonalTax;
