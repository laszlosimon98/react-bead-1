import Member from "./components/Member";
import AddButton from "./components/AddButton";
import DeleteButton from "./components/DeleteButton";
import { ReactElement } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";

const FamilyMemberTabs = (): ReactElement => {
  const members = useAppSelector((state) => state.members.data);

  return (
    <div className="flex absolute -top-12 w-full">
      {members.map((member, i) => (
        <Member key={i} member={member} />
      ))}

      <div className="flex justify-between w-full flex-col sm:flex-row relative sm:static">
        <AddButton />
        {members.length ? <DeleteButton /> : ""}
      </div>
    </div>
  );
};

export default FamilyMemberTabs;
