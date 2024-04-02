import CheckBox from "../InputComponents/CheckBox";
import Entitled from "./MarriedComponents/Entitled";
import MarriedDate from "./MarriedComponents/MarriedDate";

const JustMarried = () => {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:justify-end">
      <CheckBox label="Friss házasok kedvezménye" />
      <div className="flex justify-center items-center gap-1 sm:justify-normal">
        <MarriedDate />
        <Entitled />
      </div>
    </div>
  );
};

export default JustMarried;
