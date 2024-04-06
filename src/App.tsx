import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";
import { MemberProvider } from "./context/MembersProvider";

function App() {
  return (
    <div className="w-full h-min lg:h-screen pt-5 relative">
      <h1 className="text-3xl text-center underline">
        Bérkalkulátor alkalmazás
      </h1>
      <MemberProvider>
        <HouseholdSalaryCalculator />
      </MemberProvider>
    </div>
  );
}

export default App;
