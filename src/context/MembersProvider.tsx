import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useState,
} from "react";

export type MemberType = {
  [key: string]: string | number | boolean;
  id: number;
  name: string;
  bsalary: number;
  nsalary: number;
  selected: boolean;
};

const initMemberState: MemberType[] = [
  {
    id: 1,
    name: "Bendi",
    bsalary: 100000,
    nsalary: 0,
    selected: true,
  },
  {
    id: 2,
    name: "Laci",
    bsalary: 185000,
    nsalary: 0,
    selected: false,
  },
  {
    id: 3,
    name: "Lajos",
    bsalary: 230000,
    nsalary: 0,
    selected: false,
  },
  {
    id: 4,
    name: "Ferenc",
    bsalary: 300000,
    nsalary: 0,
    selected: false,
  },
];

type ContextType = {
  members: MemberType[];
  setMembers: (members: MemberType[]) => void;
  initNetto: () => void;
  updateNetto: () => void;
  selectedMember: () => MemberType;
  handleMember: (button: MemberType) => void;
  handleAddMember: () => void;
  handleDeleteMember: () => void;
};

export const MemberContext = createContext<ContextType | undefined>(undefined);

const useHandleContext = (): ContextType => {
  const [members, setMembers] =
    useState<ContextType["members"]>(initMemberState);

  const selectedMember = (): MemberType => {
    const selectedMember: MemberType | undefined = members.find(
      (member) => member.selected
    );
    return selectedMember!;
  };

  const initNetto = (): void => {
    const membersWithNetto: MemberType[] = members.map((member) => ({
      ...member,
      nsalary: Math.round(
        member.bsalary - member.bsalary * 0.15 - member.bsalary * 0.185
      ),
    }));

    setMembers(membersWithNetto);
  };

  const updateNetto = () => {
    const selected: MemberType = selectedMember();

    const newMemberArray: MemberType[] = members.map((member) => {
      if (member.id === selected.id) {
        member = {
          ...member,
          nsalary: Math.round(
            member.bsalary - member.bsalary * 0.15 - member.bsalary * 0.185
          ),
        };
      }
      return member;
    });

    setMembers(newMemberArray);
  };

  const handleMember = (button: MemberType): void => {
    const selectedBtn: MemberType | undefined = members.find(
      (btn) => btn.name === button.name
    );
    if (!selectedBtn) return;

    const result = members.map((btn) => ({
      ...btn,
      selected: btn.name === selectedBtn.name,
    }));

    setMembers(result);
  };

  const handleAddMember = (): void => {
    const newMember: MemberType = {
      id: members.length ? members[members.length - 1].id + 1 : 1,
      name: "Új tag",
      bsalary: 0,
      nsalary: 0,
      selected: true,
    };

    const currentMembers: MemberType[] = members.map((mem) => ({
      ...mem,
      selected: false,
    }));

    setMembers([...currentMembers, newMember]);
  };

  const handleDeleteMember = (): void => {
    const member: MemberType | undefined = members.find((mem) => mem.selected);
    if (!member) return;

    const newMembers: MemberType[] = members.filter(
      (mem) => mem.id !== member.id
    );
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
    initNetto,
    updateNetto,
    selectedMember,
    handleMember,
    handleAddMember,
    handleDeleteMember,
  };
};

export const MemberProvider = ({
  children,
}: PropsWithChildren): ReactElement => {
  return (
    <MemberContext.Provider value={useHandleContext()}>
      {children}
    </MemberContext.Provider>
  );
};
