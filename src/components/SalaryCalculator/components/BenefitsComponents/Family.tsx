import CheckBox from "../InputComponents/CheckBox";
import Dependents from "./Dependents/Dependents";

const Family = () => {
  return (
    <>
      <CheckBox label="Családi kedvezmény" />
      <Dependents />
    </>
  );
};

export default Family;
