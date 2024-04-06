import { ReactElement } from "react";
import { useMemberContext } from "../../../hooks/useMemberContext";

const TableContent = (): ReactElement => {
  const { members } = useMemberContext();

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
