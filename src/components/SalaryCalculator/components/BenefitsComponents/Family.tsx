import { ReactElement } from "react";
import CheckBox from "../InputComponents/CheckBox";
import Dependents from "./Dependents/Dependents";
import { useMemberContext } from "../../../../hooks/useMemberContext";

const Family = (): ReactElement => {
  const { setMembers, updateMembers, selectedMember } = useMemberContext();

  const handleClick = () => {
    setMembers(updateMembers("family", !selectedMember().family));
  };
  return (
    <div className="h-14 flex flex-col justify-between">
      <CheckBox
        label="Családi kedvezmény"
        handleClick={handleClick}
        checked={selectedMember().family}
      />
      {selectedMember().family && <Dependents />}
    </div>
  );
};

export default Family;
