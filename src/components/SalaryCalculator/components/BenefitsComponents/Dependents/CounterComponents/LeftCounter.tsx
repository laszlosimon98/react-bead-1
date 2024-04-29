import { ReactElement } from "react";
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

export const LeftCounter = (): ReactElement => {
  const selectedMember: MemberState = useAppSelector((state) =>
    getSelectedMember(state)
  );

  const dispatch = useAppDispatch();

  const handleDecrease = () => {
    if (selectedMember.dependents > 1) {
      dispatch(
        updateMember({
          property: "dependents",
          value: selectedMember.dependents - 1,
        })
      );
    }
    dispatch(updateNet());
  };

  const handleIncrease = () => {
    dispatch(
      updateMember({
        property: "dependents",
        value: selectedMember.dependents + 1,
      })
    );
    dispatch(updateNet());
  };

  return (
    <>
      <Template
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        count={selectedMember.dependents}
      />
    </>
  );
};
