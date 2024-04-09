import { ReactElement } from "react";
import CheckBox from "../InputComponents/CheckBox";
import { useMemberContext } from "../../../../hooks/useMemberContext";

const PersonalTax = (): ReactElement => {
  const { setMembers, updateMembers, selectedMember } = useMemberContext();

  const handleClick = () => {
    setMembers(updateMembers("personal", !selectedMember().personal));
  };
  return (
    <>
      <CheckBox
        label="Személyi adókedvezmény"
        handleClick={handleClick}
        checked={selectedMember().personal}
      />
    </>
  );
};

export default PersonalTax;
