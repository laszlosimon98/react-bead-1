import { ReactElement } from "react";
import { MemberState } from "../../../store/features/members/membersSlice";
import { useAppSelector } from "../../../hooks/reduxHooks";

const Summary = (): ReactElement => {
  const members: MemberState[] = useAppSelector((state) => state.members.data);
  return (
    <>
      {members.reduce((total, member) => {
        return total + member.nsalary;
      }, 0)}
    </>
  );
};

export default Summary;
