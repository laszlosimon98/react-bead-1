import { useState } from "react";
import Member from "./components/Member";
import AddButton from "./components/AddButton";
import DeleteButton from "./components/DeleteButton";

export type MemberType = {
  id: number;
  name: string;
  selected: boolean;
};

const FamilyMemberTabs = () => {
  const [members, setMembers] = useState<MemberType[]>([
    {
      id: 1,
      name: "Bendi",
      selected: true,
    },
    {
      id: 2,
      name: "Laci",
      selected: false,
    },
    {
      id: 3,
      name: "Lajos",
      selected: false,
    },
    {
      id: 4,
      name: "Ferenc",
      selected: false,
    },
  ]);

  const handleMember = (button: MemberType) => {
    const selectedBtn = members.find((btn) => btn.name === button.name);
    if (!selectedBtn) return;

    const result = members.map((btn) => ({
      ...btn,
      selected: btn.name === selectedBtn.name,
    }));

    setMembers(result);
  };

  const handleAddMember = () => {
    const newMember: MemberType = {
      id: members.length ? members[members.length - 1].id + 1 : 1,
      name: "Új tag",
      selected: true,
    };

    const currentMembers = members.map((mem) => ({
      ...mem,
      selected: false,
    }));

    setMembers([...currentMembers, newMember]);
  };

  const handleDelete = () => {
    const member = members.find((mem) => mem.selected);
    if (!member) return;

    const newMembers = members.filter((mem) => mem.id !== member.id);
    if (newMembers[0]) {
      newMembers[0].selected = true;
    } else {
      setMembers([]);
    }

    setMembers([...newMembers]);
  };

  return (
    <div className="flex absolute -top-12 w-full">
      {members.map((button, i) => (
        <Member key={i} btn={button} handleMember={handleMember} />
      ))}

      <div className="flex justify-between w-full">
        <AddButton handleAddMember={handleAddMember} />
        <DeleteButton handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default FamilyMemberTabs;
