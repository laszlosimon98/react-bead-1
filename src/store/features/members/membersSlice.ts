import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { exampleData } from "../../../data/exampleData";
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

const initialState = {
  data: (LoadData().loadMembers() || exampleData) as MemberState[],
};

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
      state.data = state.data.map((member) => ({
        ...member,
        isSelected: member.id === action.payload.id,
      }));

      LoadData().saveMembers(state.data);
    },
    addMember: (state) => {
      const id = state.data.length
        ? state.data[state.data.length - 1].id + 1
        : 1;
      const newMember: MemberState = generateNewMember(id);

      const resetState = state.data.map((member) => ({
        ...member,
        isSelected: false,
      }));

      state.data = [...resetState, newMember];

      LoadData().saveMembers(state.data);
    },
    deleteMember: (state) => {
      const selectedIndex = state.data.findIndex((member) => member.isSelected);
      const remainingMembers = state.data.filter(
        (member) => !member.isSelected
      );

      const index =
        selectedIndex !== state.data.length - 1
          ? selectedIndex
          : selectedIndex - 1;

      if (remainingMembers.length) {
        const newSelected = {
          ...remainingMembers[index],
          isSelected: true,
        };

        state.data = [
          ...remainingMembers.slice(0, index),
          newSelected,
          ...remainingMembers.slice(index + 1),
        ];
      }
      LoadData().saveMembers(state.data);
    },
    updateMember: (state, action: PayloadAction<updateType>) => {
      state.data = state.data.map((member) => {
        if (member.isSelected) {
          member = {
            ...member,
            [action.payload.property]: action.payload.value,
          };
        }
        return member;
      });

      LoadData().saveMembers(state.data);
    },
    initNet: (state) => {
      state.data = state.data.map((member) => ({
        ...member,
        nsalary: calcSalary(member),
      }));

      LoadData().saveMembers(state.data);
    },
    updateNet: (state) => {
      const selectedIndex = state.data.findIndex((member) => member.isSelected);
      const selectedMember = state.data.find(
        (member) => member.isSelected
      ) as MemberState;

      const updatedMember = {
        ...selectedMember,
        nsalary: calcSalary(selectedMember),
      };

      state.data = [
        ...state.data.slice(0, selectedIndex),
        updatedMember,
        ...state.data.slice(selectedIndex + 1),
      ];

      LoadData().saveMembers(state.data);
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
