// import { useState } from "react";

import { ReactElement } from "react";

const MarriedDate = (): ReactElement => {
  // const [date, setDate] = useState<Date>(new Date());

  return (
    <button className="bg-zinc-700 cursor-pointer hover:bg-zinc-800 text-white text-sm w-[9rem] flex justify-center items-center rounded-md">
      Dátum hozzáadása
    </button>
  );
};

export default MarriedDate;
