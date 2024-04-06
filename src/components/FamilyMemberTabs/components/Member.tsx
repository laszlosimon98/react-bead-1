import { useMemberContext } from "../../../hooks/useMemberContext";
import { MemberType } from "../../../context/MembersProvider";
import { ReactElement } from "react";

type MemberProps = {
  btn: MemberType;
};

const Member = ({ btn }: MemberProps): ReactElement => {
  const { handleMember } = useMemberContext();
  return (
    <button
      onClick={() => handleMember(btn)}
      className={`min-w-fit px-3 h-10 hover:bg-zinc-700 active:bg-zinc-600 flex justify-center items-center rounded-lg cursor-pointer mr-2 ${
        btn.selected ? "bg-zinc-200 text-black" : "bg-zinc-500 text-white"
      }`}
    >
      {btn.name}
    </button>
  );
};

export default Member;
