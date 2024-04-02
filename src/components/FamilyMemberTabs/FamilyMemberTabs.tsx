import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type ButtonType = {
  value: string;
  selected: boolean;
};

const FamilyMemberTabs = () => {
  const [buttons, setButtons] = useState<ButtonType[]>([
    {
      value: "Bendi",
      selected: true,
    },
    {
      value: "Laci",
      selected: false,
    },
    {
      value: "Lajos",
      selected: false,
    },
    {
      value: "Ferenc",
      selected: false,
    },
  ]);

  const handleButton = (button: ButtonType) => {
    const selectedBtn = buttons.find((btn) => btn.value === button.value);
    if (!selectedBtn) return;

    const result = buttons.map((btn) => ({
      ...btn,
      selected: btn.value === selectedBtn.value,
    }));

    setButtons(result);
  };

  return (
    <div className="flex absolute -top-12">
      {buttons.map((button, i) => (
        <button
          key={i}
          onClick={() => handleButton(button)}
          className={`w-16 h-10 hover:bg-zinc-700 active:bg-zinc-600 flex justify-center items-center rounded-lg cursor-pointer mr-2 ${
            button.selected
              ? "bg-zinc-200 text-black"
              : "bg-zinc-500 text-white"
          }`}
        >
          {button.value}
        </button>
      ))}

      <button className="bg-zinc-300 text-black  hover:bg-zinc-400 active:bg-zinc-400 active:text-white  w-[2.5rem] h-[2.5rem] rounded-md">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default FamilyMemberTabs;
