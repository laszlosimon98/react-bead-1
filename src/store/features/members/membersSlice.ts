import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initMemberState } from "../../../data/exampleData";
import useLocalStorage from "../../../hooks/useLocalStorage";

type updateType = {
  property: string;
  value: number | string | boolean;
};

export type MemberState = {
  [key: string]: string | number | boolean;
  id: number;
  name: string;
  bsalary: number;
  nsalary: number;
  isSelected: boolean;
  isUnder25Checked: boolean;
  isJustMarriedChecked: boolean;
  isPersonalChecked: boolean;
  isFamilyChecked: boolean;
  hasMarriedDate: string;
  isEntitled: boolean;
  dependents: number;
  beneficiaryDependents: number;
};

const LoadData = () => {
  const { loadMembers, saveMembers } = useLocalStorage("members");

  return { loadMembers, saveMembers };
};

const initialState: MemberState[] = LoadData().loadMembers() || initMemberState;

const generateNewMember = (id: number) => {
  return {
    id,
    name: "Új tag",
    bsalary: 0,
    nsalary: 0,
    isSelected: true,
    isUnder25Checked: false,
    isJustMarriedChecked: false,
    isPersonalChecked: false,
    isFamilyChecked: false,
    hasMarriedDate: "",
    isEntitled: false,
    dependents: 1,
    beneficiaryDependents: 1,
  };
};

const calcSalary = (selected: MemberState): number => {
  let tax = selected.bsalary * 0.185;

  if (!selected.isUnder25Checked) {
    tax += selected.bsalary * 0.15;
  }

  if (selected.isUnder25Checked && selected.bsalary > 499952) {
    tax += (selected.bsalary - 499952) * 0.15;
  }

  if (selected.isPersonalChecked) {
    tax = Math.max(tax - 77300, 0);
  }

  let salary = Math.round(selected.bsalary - tax);

  if (selected.isFamilyChecked) {
    const amount: number =
      selected.beneficiaryDependents === 1
        ? 10000
        : selected.beneficiaryDependents === 2
        ? 20000
        : 30000;

    salary += amount * selected.dependents;
  }

  if (selected.isJustMarriedChecked && selected.isEntitled) {
    salary += 5000;
  }

  return salary;
};

export const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    selectMember: (state, action: PayloadAction<MemberState>) => {
      const newState = state.map((member) => ({
        ...member,
        isSelected: member.id === action.payload.id,
      }));

      LoadData().saveMembers(newState);
      return newState;
    },
    addMember: (state) => {
      const id = state.length ? state[state.length - 1].id + 1 : 1;
      const newMember: MemberState = generateNewMember(id);

      const resetState = state.map((member) => ({
        ...member,
        isSelected: false,
      }));

      LoadData().saveMembers([...resetState, newMember]);
      return [...resetState, newMember];
    },
    deleteMember: (state) => {
      const selectedIndex = state.findIndex((member) => member.isSelected);
      let remainingMembers = state.filter((member) => !member.isSelected);

      const index =
        selectedIndex !== state.length - 1 ? selectedIndex : selectedIndex - 1;

      if (remainingMembers.length) {
        const newSelected = {
          ...remainingMembers[index],
          isSelected: true,
        };

        remainingMembers = [
          ...remainingMembers.slice(0, index),
          newSelected,
          ...remainingMembers.slice(index + 1),
        ];
      }

      LoadData().saveMembers(remainingMembers);
      return remainingMembers;
    },
    updateMember: (state, action: PayloadAction<updateType>) => {
      const newState = state.map((member) => {
        if (member.isSelected) {
          member = {
            ...member,
            [action.payload.property]: action.payload.value,
          };
        }
        return member;
      });

      LoadData().saveMembers(newState);
      return newState;
    },
    initNet: (state) => {
      const newState = state.map((member) => ({
        ...member,
        nsalary: calcSalary(member),
      }));

      LoadData().saveMembers(newState);
      return newState;
    },
    updateNet: (state) => {
      const selectedIndex = state.findIndex((member) => member.isSelected);
      const selectedMember = state.find(
        (member) => member.isSelected
      ) as MemberState;

      const updatedMember = {
        ...selectedMember,
        nsalary: calcSalary(selectedMember),
      };

      LoadData().saveMembers([
        ...state.slice(0, selectedIndex),
        updatedMember,
        ...state.slice(selectedIndex + 1),
      ]);

      return [
        ...state.slice(0, selectedIndex),
        updatedMember,
        ...state.slice(selectedIndex + 1),
      ];
    },
  },
});

export const {
  selectMember,
  addMember,
  deleteMember,
  updateMember,
  initNet,
  updateNet,
} = membersSlice.actions;

export default membersSlice.reducer;
