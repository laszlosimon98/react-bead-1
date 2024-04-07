import { ReactElement } from "react";
import CheckBox from "../InputComponents/CheckBox";
import { useMemberContext } from "../../../../hooks/useMemberContext";

const Under25 = (): ReactElement => {
  const { members, setMembers, selectedMember } = useMemberContext();

  const handleClick = () => {
    const newMembersArray = members.map((member) => {
      if (member.id === selectedMember().id) {
        member = {
          ...selectedMember(),
          under25: !selectedMember().under25,
        };
      }
      return member;
    });

    setMembers(newMembersArray);
    console.log(...newMembersArray);
  };

  return (
    <>
      <CheckBox
        handleClick={handleClick}
        label="25 év alattiak SZJA mentessége"
      />
    </>
  );
};

export default Under25;
