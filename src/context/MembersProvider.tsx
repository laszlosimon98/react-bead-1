import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useState,
} from "react";

import { MemberType, initMemberState } from "../data/exampleData";
import useLocalStorage from "../hooks/useLocalStorage";

type updateType = number | boolean | string;

type ContextType = {
  members: MemberType[];
  setMembers: (members: MemberType[]) => void;
  initNetto: () => void;
  updateNetto: () => void;
  updateMembers: (property: string, value: updateType) => MemberType[];
  selectedMember: () => MemberType;
  handleMember: (button: MemberType) => void;
  handleAddMember: () => void;
  handleDeleteMember: () => void;
};

export const MemberContext = createContext<ContextType | undefined>(undefined);

const useHandleContext = (): ContextType => {
  const membersStorage = useLocalStorage("members");

  const [members, setMembers] = useState<ContextType["members"]>(
    membersStorage.loadMembers() || initMemberState
  );

  const selectedMember = (): MemberType => {
    const selectedMember: MemberType | undefined = members.find(
      (member) => member.selected
    );

    membersStorage.saveMembers(members);
    return selectedMember!;
  };

  const initNetto = (): void => {
    const membersWithNetto: MemberType[] = members.map((member) => ({
      ...member,
      nsalary: calcSalary(member),
    }));

    setMembers(membersWithNetto);
    membersStorage.saveMembers(members);
  };

  const updateNetto = () => {
    const selected: MemberType = selectedMember();
    const salary = calcSalary(selected);

    setMembers(updateMembers("nsalary", salary));
    membersStorage.saveMembers(members);
  };

  const calcSalary = (selected: MemberType): number => {
    let tax = selected.bsalary * 0.185;

    if (!selected.under25) {
      tax += selected.bsalary * 0.15;
    }

    if (selected.under25 && selected.bsalary > 499952) {
      tax += (selected.bsalary - 499952) * 0.15;
    }

    if (selected.personal) {
      tax = Math.max(tax - 77300, 0);
    }

    let salary = Math.round(selected.bsalary - tax);

    if (selected.family) {
      const amount: number =
        selected.beneficiaryDependents === 1
          ? 10000
          : selected.beneficiaryDependents === 2
          ? 20000
          : 30000;

      salary += amount * selected.dependents;
    }

    if (selected.justMarried && selected.isEntitled) {
      salary += 5000;
    }

    return salary;
  };

  const updateMembers = (property: string, value: updateType): MemberType[] => {
    return members.map((member) => {
      if (member.id === selectedMember().id) {
        member = {
          ...selectedMember(),
          [property]: value,
        };
      }
      membersStorage.saveMembers(members);
      return member;
    });
  };

  const handleMember = (button: MemberType): void => {
    const selectedBtn: MemberType | undefined = members.find(
      (btn) => btn.id === button.id
    );
    if (!selectedBtn) return;

    const result = members.map((btn) => ({
      ...btn,
      selected: btn.id === selectedBtn.id,
    }));

    setMembers(result);
    membersStorage.saveMembers(members);
  };

  const handleAddMember = (): void => {
    const newMember: MemberType = {
      id: members.length ? members[members.length - 1].id + 1 : 1,
      name: "Új tag",
      bsalary: 0,
      nsalary: 0,
      selected: true,
      under25: false,
      justMarried: false,
      personal: false,
      family: false,
      marriedDate: "",
      isEntitled: false,
      dependents: 1,
      beneficiaryDependents: 1,
    };

    const currentMembers: MemberType[] = members.map((mem) => ({
      ...mem,
      selected: false,
    }));

    setMembers([...currentMembers, newMember]);
    membersStorage.saveMembers(members);
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
    membersStorage.saveMembers(members);
  };

  return {
    members,
    setMembers,
    initNetto,
    updateNetto,
    updateMembers,
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
