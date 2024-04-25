import { ReactElement } from "react";
import { openModal } from "../../../../../store/features/modal/modalSlice";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";

const MarriedDate = (): ReactElement => {
  const dispatch = useAppDispatch();

  const handleModalVisible = () => {
    dispatch(openModal());
  };

  return (
    <button
      onClick={handleModalVisible}
      className="bg-zinc-700 cursor-pointer hover:bg-zinc-800 text-white text-sm w-[9rem] flex justify-center items-center rounded-md"
    >
      Dátum hozzáadása
    </button>
  );
};

export default MarriedDate;
