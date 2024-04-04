import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type AddButtonProps = {
  handleAddMember: () => void;
};

const AddButton = ({ handleAddMember }: AddButtonProps) => {
  return (
    <button
      onClick={handleAddMember}
      className="bg-zinc-300 text-black  hover:bg-zinc-400 active:bg-zinc-400 active:text-white  w-[2.5rem] h-[2.5rem] rounded-md"
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

export default AddButton;
