import { Dispatch, ReactElement, SetStateAction } from "react";
import CheckBox from "../InputComponents/CheckBox";
import Entitled from "./MarriedComponents/Entitled";
import MarriedDate from "./MarriedComponents/MarriedDate";
import { useMemberContext } from "../../../../hooks/useMemberContext";

const JustMarried = (): ReactElement => {
  const { setMembers, updateMembers, selectedMember } = useMemberContext();

  const handleClick = () => {
    setMembers(updateMembers("justMarried", !selectedMember().justMarried));
  };

  return (
    <div className="flex flex-col sm:flex-row w-full">
      <CheckBox
        label="Friss házasok kedvezménye"
        handleClick={handleClick}
        checked={selectedMember().justMarried}
      />

      {selectedMember().justMarried && (
        <div className="flex justify-center items-center gap-1 sm:justify-evenly sm:w-2/4">
          <MarriedDate />
          {selectedMember().marriedDate && <Entitled />}
        </div>
      )}
    </div>
  );
};

export default JustMarried;
