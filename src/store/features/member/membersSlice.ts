import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MemberState, initMemberState } from "../../../data/exampleData";

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
  },
});

export const { selectMember } = membersSlice.actions;

export default membersSlice.reducer;
