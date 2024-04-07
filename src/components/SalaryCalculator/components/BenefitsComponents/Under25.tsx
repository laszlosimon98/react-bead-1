import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import CheckBox from "../InputComponents/CheckBox";
import { useMemberContext } from "../../../../hooks/useMemberContext";

type Under25Props = {
  change: boolean;
  setChange: Dispatch<SetStateAction<boolean>>;
};
const Under25 = ({ change, setChange }: Under25Props): ReactElement => {
  const [status, setStatus] = useState<boolean>(true);
  const { members, setMembers, selectedMember } = useMemberContext();

  const handleClick = () => {
    const newMembersArray = members.map((member) => {
      if (member.id === selectedMember().id) {
        member = {
          ...selectedMember(),
          under25: status,
        };
      }
      return member;
    });

    setMembers(newMembersArray);
    setChange(!change);
  };

  return (
    <>
      <CheckBox
        handleClick={handleClick}
        status={status}
        setStatus={setStatus}
        label="25 év alattiak SZJA mentessége"
      />
    </>
  );
};

export default Under25;
