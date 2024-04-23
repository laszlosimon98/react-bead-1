import { ReactElement, useCallback, useEffect } from "react";
import Template from "./Template";
import { useMemberContext } from "../../../../../../hooks/useMemberContext";

export const RightCounter = (): ReactElement => {
  const { setMembers, updateMembers, selectedMember } = useMemberContext();

  useEffect(() => {
    if (selectedMember().dependents < selectedMember().beneficiaryDependents) {
      setMembers(
        updateMembers("beneficiaryDependents", selectedMember().dependents)
      );
    }
  }, [selectedMember().dependents]);

  const handleDecrease = () => {
    if (selectedMember().beneficiaryDependents > 1) {
      setMembers(
        updateMembers(
          "beneficiaryDependents",
          selectedMember().beneficiaryDependents - 1
        )
      );
    }
  };

  const handleIncrease = () => {
    if (
      selectedMember().beneficiaryDependents <
      Math.min(selectedMember().dependents, 3)
    ) {
      setMembers(
        updateMembers(
          "beneficiaryDependents",
          selectedMember().beneficiaryDependents + 1
        )
      );
    }
  };

  return (
    <>
      <Template
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        count={selectedMember().beneficiaryDependents}
      />
    </>
  );
};
