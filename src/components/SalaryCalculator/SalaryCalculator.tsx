import Family from "./components/BenefitsComponents/Family";
import Input from "./components/InputComponents/Input";
import JustMarried from "./components/BenefitsComponents/JustMarried";
import PercentButton from "./components/InputComponents/PercentButton";
import PersonalTax from "./components/BenefitsComponents/PersonalTax";
import Slider from "./components/InputComponents/Slider";
import Under25 from "./components/BenefitsComponents/Under25";
import {
  ReactElement,
  useLayoutEffect,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMemberContext } from "../../hooks/useMemberContext";

const SalaryCalculator = (): ReactElement => {
  const { selectedMember, initNetto, updateNetto } = useMemberContext();
  const bsalary = useMemo(() => selectedMember().bsalary, [selectedMember]);
  const nsalary = useMemo(() => selectedMember().nsalary, [selectedMember]);

  const { under25 } = selectedMember();

  useEffect(() => {
    initNetto();
  }, []);

  useLayoutEffect(() => {
    updateNetto();
  }, [bsalary, under25]);

  return (
    <div className="p-5 flex flex-col items-start justify-between h-full sm:relative w-full">
      <div className="w-full">
        <div className="flex flex-col sm:items-center sm:justify-center w-full">
          <h2 className="uppercase text-md font-bold sm:text-lg md:text-xl lg:text-xl text-center">
            {selectedMember().name} Bérének kiszámítása
          </h2>

          <Input title="Családtag neve" name="nev" property="name" />
          <Input title="Bruttó bér" name="ber" property="bsalary" />

          <Slider property="bsalary" />

          <div className="flex w-full justify-center mt-2 items-center">
            <PercentButton value={-1} property="bsalary" />
            <PercentButton value={-5} property="bsalary" />
            <PercentButton value={1} property="bsalary" />
            <PercentButton value={5} property="bsalary" />
          </div>
        </div>

        <h3 className="font-bold mt-4 mb-2">Kedvezmények</h3>
        <div className="flex flex-col h-36 justify-evenly">
          <Under25 />
          <JustMarried />
          <PersonalTax />
          <Family />
        </div>
      </div>

      <div className="w-full self-center flex flex-col justify-center items-center">
        <h3 className="text-xl sm:text-2xl w-full text-center">
          Számított nettó bér:
        </h3>
        <div className="bg-zinc-700 text-white sm:mt-3 w-[8.5rem] h-12 flex justify-center items-center rounded-lg">
          {nsalary} Ft
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;
