import { createContext, PropsWithChildren, useState } from "react";

export type MemberType = {
  id: number;
  name: string;
  selected: boolean;
};

const initMemberState: MemberType[] = [
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
];

type ContextType = {
  members: MemberType[];
  setMembers: (members: MemberType[]) => void;
  handleMember: (button: MemberType) => void;
  handleAddMember: () => void;
  handleDeleteMember: () => void;
};

export const MemberContext = createContext<ContextType | undefined>(undefined);

const useHandleContext = () => {
  const [members, setMembers] =
    useState<ContextType["members"]>(initMemberState);

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

  const handleDeleteMember = () => {
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

  return {
    members,
    setMembers,
    handleMember,
    handleAddMember,
    handleDeleteMember,
  };
};

export const MemberProvider = ({ children }: PropsWithChildren) => {
  return (
    <MemberContext.Provider value={useHandleContext()}>
      {children}
    </MemberContext.Provider>
  );
};
