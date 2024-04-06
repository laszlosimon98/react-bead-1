import Member from "./components/Member";
import AddButton from "./components/AddButton";
import DeleteButton from "./components/DeleteButton";
import { useMemberContext } from "../../hooks/useMemberContext";
import { ReactElement } from "react";

const FamilyMemberTabs = (): ReactElement => {
  const { members } = useMemberContext();

  return (
    <div className="flex absolute -top-12 w-full">
      {members.map((button, i) => (
        <Member key={i} btn={button} />
      ))}

      <div className="flex justify-between w-full flex-col sm:flex-row relative sm:static">
        <AddButton />
        <DeleteButton />
      </div>
    </div>
  );
};

export default FamilyMemberTabs;
