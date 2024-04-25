import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initMemberState } from "../../../data/exampleData";

export type MemberState = {
  [key: string]: string | number | boolean;
  id: number;
  name: string;
  bsalary: number;
  nsalary: number;
  selected: boolean;
  under25: boolean;
  justMarried: boolean;
  personal: boolean;
  family: boolean;
  marriedDate: string;
  isEntitled: boolean;
  dependents: number;
  beneficiaryDependents: number;
};

const initialState: MemberState[] = initMemberState;

export const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    selectMember: (state, action: PayloadAction<MemberState>) => {
      return state.map((member) => ({
        ...member,
        selected: member.id === action.payload.id,
      }));
    },
    addMember: (state) => {
      const newMember: MemberState = {
        id: state.length ? state[state.length - 1].id + 1 : 1,
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

      const resetState = state.map((member) => ({
        ...member,
        selected: false,
      }));

      return [...resetState, newMember];
    },
  },
});

export const { selectMember, addMember } = membersSlice.actions;

export default membersSlice.reducer;
