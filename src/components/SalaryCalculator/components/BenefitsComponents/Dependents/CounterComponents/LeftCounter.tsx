import { ReactElement } from "react";
import Template from "./Template";
import { useMemberContext } from "../../../../../../hooks/useMemberContext";

export const LeftCounter = (): ReactElement => {
  const { setMembers, updateMembers, selectedMember } = useMemberContext();

  const handleDecrease = () => {
    if (selectedMember().dependents > 1) {
      setMembers(updateMembers("dependents", selectedMember().dependents - 1));
    }
  };

  const handleIncrease = () => {
    setMembers(updateMembers("dependents", selectedMember().dependents + 1));
  };

  return (
    <>
      <Template
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        count={selectedMember().dependents}
      />
    </>
  );
};
