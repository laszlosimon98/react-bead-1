import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";

function App() {
  return (
    <div className="w-full screen-min-height my-5">
      <h1 className="text-3xl text-center underline">
        Bérkalkulátor alkalmazás
      </h1>
      <HouseholdSalaryCalculator />
    </div>
  );
}

export default App;
