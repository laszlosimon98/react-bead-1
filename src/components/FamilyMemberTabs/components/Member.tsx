import { useAppDispatch } from "../../../hooks/reduxHooks";
import { ReactElement } from "react";
import {
  MemberState,
  selectMember,
} from "../../../store/features/members/membersSlice";

type MemberProps = {
  member: MemberState;
};

const Member = ({ member }: MemberProps): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(selectMember(member))}
      className={`min-w-fit px-3 h-10 hover:bg-zinc-700 active:bg-zinc-600 flex justify-center items-center rounded-lg cursor-pointer mr-2 ${
        member.selected ? "bg-zinc-200 text-black" : "bg-zinc-500 text-white"
      }`}
    >
      {member.name}
    </button>
  );
};

export default Member;
