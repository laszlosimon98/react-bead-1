import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";

function App() {
  return (
    <div className="w-full h-min lg:h-screen pt-5 relative">
      <h1 className="text-3xl text-center underline">
        Bérkalkulátor alkalmazás
      </h1>
      <HouseholdSalaryCalculator />
    </div>
  );
}

export default App;
