import { ReactElement } from "react";
import CheckBox from "../InputComponents/CheckBox";
import Dependents from "./Dependents/Dependents";

const Family = (): ReactElement => {
  return (
    <>
      <CheckBox label="Családi kedvezmény" />
      <Dependents />
    </>
  );
};

export default Family;
