import { ReactElement } from "react";
import { MemberState } from "../../../store/features/members/membersSlice";
import { useAppSelector } from "../../../hooks/reduxHooks";

const TableContent = (): ReactElement => {
  const members: MemberState[] = useAppSelector((state) => state.members);

  return (
    <>
      {members.map((member, index) => (
        <tr key={index}>
          <td className="p-2 pl-4">{member.name}</td>
          <td className="p-2 pl-4">{member.nsalary} Ft</td>
        </tr>
      ))}
    </>
  );
};

export default TableContent;
