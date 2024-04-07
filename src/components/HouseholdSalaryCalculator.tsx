import { ReactElement } from "react";
import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { useMemberContext } from "../hooks/useMemberContext";
// import Modal from "./SalaryCalculator/components/Modal";

const HouseholdSalaryCalculator = (): ReactElement => {
  const { members } = useMemberContext();

  return (
    <main className="flex flex-col justify-center items-center w-full mt-24 sm:flex-col md:flex-col lg:flex-row">
      <div className="bg-zinc-200 rounded-lg relative mb-5 h-[40rem] w-[22rem] sm:w-[38rem] md:w-[45rem] lg:w-[35rem] lg:mb-3 lg:mr-5">
        <FamilyMemberTabs />
        {members.length ? (
          <>
            <SalaryCalculator />
          </>
        ) : (
          <p className="flex justify-center items-center h-full text-2xl text-red-600">
            Hozzon létre új személyt!
          </p>
        )}
      </div>
      <div className="bg-zinc-200 rounded-lg h-[40rem] w-[22rem] sm:w-[38rem] md:w-[45rem] lg:w-[35rem] mb-5 lg:mb-3">
        {members.length ? <HouseholdSummary /> : ""}
      </div>

      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
        <div className="flex justify-center items-center w-full h-screen">
          <Modal />
        </div>
      </div> */}
    </main>
  );
};

export default HouseholdSalaryCalculator;
