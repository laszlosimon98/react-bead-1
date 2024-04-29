import { ReactElement } from "react";
import { MemberState } from "../../../../../store/features/members/membersSlice";
import { useAppSelector } from "../../../../../hooks/reduxHooks";
import { getSelectedMember } from "../../../../../store/features/members/memberUtil";

const Entitled = (): ReactElement => {
  const selectedMember: MemberState = useAppSelector((state) =>
    getSelectedMember(state)
  );

  return (
    <div
      className={`${
        selectedMember.isEntitled ? "bg-green-700" : "bg-red-700"
      } text-white text-sm w-[6rem] flex justify-center items-center rounded-md`}
    >
      {selectedMember.isEntitled ? "Jogosult" : "Nem Jogosult"}
    </div>
  );
};

export default Entitled;
