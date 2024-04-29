import { RootState } from "../../store";
import { MemberState } from "./membersSlice";

export const getSelectedMember = (state: RootState): MemberState =>
  state.members.data.find((member) => member.isSelected) as MemberState;
