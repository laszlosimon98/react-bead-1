import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

type DeleteButtonProps = {
  handleDelete: () => void;
};

const DeleteButton = ({ handleDelete }: DeleteButtonProps) => {
  return (
    <button
      onClick={handleDelete}
      className="bg-zinc-500 text-white hover:text-black hover:bg-zinc-300 active:bg-zinc-400 active:text-white  w-[2.5rem] h-[2.5rem] rounded-md"
    >
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
};

export default DeleteButton;
