import { ReactElement } from "react";
import CheckBox from "../InputComponents/CheckBox";
import { useMemberContext } from "../../../../hooks/useMemberContext";

const Under25 = (): ReactElement => {
  const { setMembers, updateMembers, selectedMember } = useMemberContext();

  const handleClick = () => {
    setMembers(updateMembers("under25", !selectedMember().under25));
  };

  return (
    <>
      <CheckBox
        label="25 év alattiak SZJA mentessége"
        handleClick={handleClick}
        checked={selectedMember().under25}
      />
    </>
  );
};

export default Under25;
