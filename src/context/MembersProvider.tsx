import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useState,
} from "react";

import { MemberState } from "../store/features/members/membersSlice";
import { initMemberState } from "../data/exampleData";
import useLocalStorage from "../hooks/useLocalStorage";

type updateType = number | boolean | string;

type ContextType = {
  members: MemberState[];
  setMembers: (members: MemberState[]) => void;
  initNetto: () => void;
  updateNetto: () => void;
  updateMembers: (property: string, value: updateType) => MemberState[];
  selectedMember: () => MemberState;
  handleMember: (button: MemberState) => void;
  handleAddMember: () => void;
  handleDeleteMember: () => void;
};

export const MemberContext = createContext<ContextType | undefined>(undefined);

const useHandleContext = (): ContextType => {
  const membersStorage = useLocalStorage("members");

  const [members, setMembers] = useState<ContextType["members"]>(
    membersStorage.loadMembers() || initMemberState
  );

  const selectedMember = (): MemberState => {
    const selectedMember: MemberState | undefined = members.find(
      (member) => member.selected
    );

    membersStorage.saveMembers(members);
    return selectedMember!;
  };

  const initNetto = (): void => {
    const membersWithNetto: MemberState[] = members.map((member) => ({
      ...member,
      nsalary: calcSalary(member),
    }));

    setMembers(membersWithNetto);
    membersStorage.saveMembers(members);
  };

  const updateNetto = () => {
    const selected: MemberState = selectedMember();
    const salary = calcSalary(selected);

    setMembers(updateMembers("nsalary", salary));
    membersStorage.saveMembers(members);
  };

  const calcSalary = (selected: MemberState): number => {
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

  const updateMembers = (
    property: string,
    value: updateType
  ): MemberState[] => {
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

  const handleMember = (button: MemberState): void => {
    const selectedBtn: MemberState | undefined = members.find(
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
    const newMember: MemberState = {
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

    const currentMembers: MemberState[] = members.map((mem) => ({
      ...mem,
      selected: false,
    }));

    setMembers([...currentMembers, newMember]);
    membersStorage.saveMembers(members);
  };

  const handleDeleteMember = (): void => {
    const member: MemberState | undefined = members.find((mem) => mem.selected);
    if (!member) return;

    const newMembers: MemberState[] = members.filter(
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
