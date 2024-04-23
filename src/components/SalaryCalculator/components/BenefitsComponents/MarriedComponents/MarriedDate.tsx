import { Dispatch, ReactElement, SetStateAction } from "react";

type MarriedDateProps = {
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
};

const MarriedDate = ({ setIsModalVisible }: MarriedDateProps): ReactElement => {
  const handleModalVisible = () => {
    setIsModalVisible(true);
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
