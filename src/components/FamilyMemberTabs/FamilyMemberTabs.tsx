import Member from "./components/Member";
import AddButton from "./components/AddButton";
import DeleteButton from "./components/DeleteButton";
import { useMemberContext } from "../../hooks/useMemberContext";

const FamilyMemberTabs = () => {
  const {
    members,
    // setMembers,
    handleMember,
    handleAddMember,
    handleDeleteMember,
  } = useMemberContext();

  return (
    <div className="flex absolute -top-12 w-full">
      {members.map((button, i) => (
        <Member key={i} btn={button} handleMember={handleMember} />
      ))}

      <div className="flex justify-between w-full flex-col sm:flex-row relative sm:static">
        <AddButton handleAddMember={handleAddMember} />
        <DeleteButton handleDelete={handleDeleteMember} />
      </div>
    </div>
  );
};

export default FamilyMemberTabs;
