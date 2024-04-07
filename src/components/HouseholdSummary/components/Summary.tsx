import { ReactElement } from "react";
import { useMemberContext } from "../../../hooks/useMemberContext";

const Summary = (): ReactElement => {
  const { members } = useMemberContext();

  return (
    <>
      {members.reduce((total, member) => {
        return total + member.nsalary;
      }, 0)}
    </>
  );
};

export default Summary;
