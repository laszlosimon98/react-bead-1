import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
// import Modal from "./SalaryCalculator/components/Modal";

const HouseholdSalaryCalculator = () => {
  return (
    <main className="flex flex-col justify-center items-center w-full mt-24 sm:flex-col md:flex-col lg:flex-row">
      <div className="bg-zinc-200 rounded-lg relative mb-5 h-[40rem] w-[22rem] sm:w-[38rem] md:w-[45rem] lg:w-[35rem] lg:mb-3 lg:mr-5">
        <FamilyMemberTabs />
        <SalaryCalculator />
      </div>
      <div className="bg-zinc-200 rounded-lg h-[40rem] w-[22rem] sm:w-[38rem] md:w-[45rem] lg:w-[35rem] mb-5 lg:mb-3">
        <HouseholdSummary />
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
