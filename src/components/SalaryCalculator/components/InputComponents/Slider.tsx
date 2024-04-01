import { ChangeEvent } from "react";

const Slider = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <input
        type="range"
        min={-20}
        max={20}
        step={1}
        defaultValue={0}
        className="w-full sm:w-[25rem] md:w-[30rem] lg:w-[25rem]"
        onChange={handleChange}
      />
    </>
  );
};

export default Slider;
