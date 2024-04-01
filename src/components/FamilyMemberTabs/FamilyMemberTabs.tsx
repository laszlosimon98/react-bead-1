import { useState } from "react";

type ButtonType = {
  value: string;
  selected: boolean;
};

const FamilyMemberTabs = () => {
  const [buttons, setButtons] = useState<ButtonType[]>([
    {
      value: "Bendi",
      selected: false,
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
    <div className="flex absolute -top-10">
      {buttons.map((button, i) => (
        <button
          key={i}
          onClick={() => handleButton(button)}
          className={`w-16 h-8 hover:bg-zinc-700 active:bg-zinc-600 flex justify-center items-center rounded-lg cursor-pointer mr-2 ${
            button.selected
              ? "bg-zinc-200 text-black"
              : "bg-zinc-500 text-white"
          }`}
        >
          {button.value}
        </button>
      ))}
      <div className="w-9 h-8 bg-zinc-300 flex justify-center items-center rounded-lg cursor-pointer">
        <div className="hover:bg-slate-50 w-7 h-7 text-lg leading-none flex justify-center items-center rounded-md">
          +
        </div>
      </div>
    </div>
  );
};

export default FamilyMemberTabs;
