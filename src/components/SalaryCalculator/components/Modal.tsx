import { ChangeEvent, ReactElement } from "react";
import { useMemberContext } from "../../../hooks/useMemberContext";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { deactivate } from "../../../store/features/modal/modalSlice";

const Modal = (): ReactElement => {
  const { setMembers, selectedMember, updateMembers } = useMemberContext();
  const dispatch = useAppDispatch();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMembers(updateMembers("marriedDate", e.target.value));
  };

  const handleClose = () => {
    dispatch(deactivate());
  };

  const handleSave = () => {
    const currentDate: Date = new Date();
    const current: number =
      currentDate.getFullYear() * 12 + currentDate.getMonth();

    const marriedYear: number = parseInt(
      selectedMember().marriedDate.split("/")[0]
    );

    const marriedMonth: number = parseInt(
      selectedMember().marriedDate.split("/")[1]
    );

    selectedMember().isEntitled =
      current - (marriedYear * 12 + marriedMonth) <= 24;
    handleClose();
  };

  return (
    <div className="w-[22rem] h-[18rem] sm:w-[30rem] sm:h-[15rem] bg-zinc-100 rounded-lg p-4 z-10 shadow-lg">
      <p className="text-sm opacity-70 mb-5">
        A kedvezmény először a házasságkötést követő hónapra vehető igénybe és a
        házassági életközösség alatt legfeljebb 24 hónapon keresztül jár.
      </p>

      <p className="font-semibold text-sm mb-3">
        Add meg a házasságkötés dátumát:
      </p>

      <input
        type="text"
        placeholder="YYYY/MM/DD"
        className="w-3/4 h-8 p-2 rounded-md shadow-sm"
        onInput={handleInput}
        value={selectedMember().marriedDate}
        maxLength={10}
      />

      <p className="text-sm opacity-50 mt-1 mb-5">Például: 2000/10/25</p>

      <div className="flex flex-row gap-3">
        <button
          onClick={handleSave}
          className="bg-zinc-600 hover:bg-zinc-800 active:bg-zinc-700 text-white rounded-md flex justify-center items-center w-24 h-10"
        >
          Mentés
        </button>
        <button
          onClick={handleClose}
          className="bg-zinc-600 hover:bg-zinc-800 active:bg-zinc-700 text-white rounded-md flex justify-center items-center w-24 h-10"
        >
          Vissza
        </button>
      </div>
    </div>
  );
};

export default Modal;
