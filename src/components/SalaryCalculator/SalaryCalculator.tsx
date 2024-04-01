import Family from "./components/BenefitsComponents/Family";
import Input from "./components/InputComponents/Input";
import JustMarried from "./components/BenefitsComponents/JustMarried";
import PercentButton from "./components/InputComponents/PercentButton";
import PersonalTax from "./components/BenefitsComponents/PersonalTax";
import Slider from "./components/InputComponents/Slider";
import Under25 from "./components/BenefitsComponents/Under25";

const SalaryCalculator = () => {
  return (
    <div className="m-5 relative">
      <div className="flex flex-col sm:items-center">
        <div className="flex justify-between">
          <h2 className="uppercase text-md font-bold sm:text-lg md:text-xl lg:text-xl">
            Bendi Bérének kiszámítása
          </h2>
          <button className="bg-red-500 text-white hover:bg-red-700 active:bg-red-600 w-[4rem] h-[2rem] rounded-md py-1 px-2 sm:absolute sm:-top-[3.7rem] sm:-right-5">
            Törlés
          </button>
        </div>

        <Input title="Családtag neve" name="nev" />
        <Input title="Bruttó bér" name="ber" />

        <Slider />

        <div className="flex w-full justify-center mt-2 items-center">
          <PercentButton value={-1} />
          <PercentButton value={-5} />
          <PercentButton value={1} />
          <PercentButton value={5} />
        </div>
      </div>

      <h3 className="font-bold mt-4 mb-2">Kedvezmények</h3>
      <div className="flex flex-col h-32 justify-evenly">
        <Under25 />
        <JustMarried />
        <PersonalTax />
        <Family />
      </div>

      <div className="relative h-40 w-full">
        <h3 className="absolute bottom-14 text-2xl w-full text-center">
          Számított nettó bér:
        </h3>
        <div className="bg-zinc-700 text-white mt-3 w-[8.5rem] h-12 flex justify-center items-center rounded-lg absolute bottom-0 left-1/2 -translate-x-1/2">
          130.000 Ft
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;
