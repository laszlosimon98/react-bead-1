import { ReactElement } from "react";
import { useMemberContext } from "../../../../../hooks/useMemberContext";

const Entitled = (): ReactElement => {
  const { selectedMember } = useMemberContext();

  return (
    <div
      className={`${
        selectedMember().isEntitled ? "bg-green-700" : "bg-red-700"
      } text-white text-sm w-[6rem] flex justify-center items-center rounded-md`}
    >
      {selectedMember().isEntitled ? "Jogosult" : "Nem Jogosult"}
    </div>
  );
};

export default Entitled;
