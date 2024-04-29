import { ReactElement, useEffect } from "react";
import Template from "./Template";
import {
  MemberState,
  updateMember,
  updateNet,
} from "../../../../../../store/features/members/membersSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../hooks/reduxHooks";
import { getSelectedMember } from "../../../../../../store/features/members/memberUtil";

export const RightCounter = (): ReactElement => {
  const selectedMember: MemberState = useAppSelector((state) =>
    getSelectedMember(state)
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedMember.dependents < selectedMember.beneficiaryDependents) {
      dispatch(
        updateMember({
          property: "beneficiaryDependents",
          value: selectedMember.dependents,
        })
      );
    }
  }, [selectedMember.dependents]);

  const handleDecrease = () => {
    if (selectedMember.beneficiaryDependents > 1) {
      dispatch(
        updateMember({
          property: "beneficiaryDependents",
          value: selectedMember.beneficiaryDependents - 1,
        })
      );
    }
    dispatch(updateNet());
  };

  const handleIncrease = () => {
    if (
      selectedMember.beneficiaryDependents <
      Math.min(selectedMember.dependents, 3)
    ) {
      dispatch(
        updateMember({
          property: "beneficiaryDependents",
          value: selectedMember.beneficiaryDependents + 1,
        })
      );
    }
    dispatch(updateNet());
  };

  return (
    <>
      <Template
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        count={selectedMember.beneficiaryDependents}
      />
    </>
  );
};
