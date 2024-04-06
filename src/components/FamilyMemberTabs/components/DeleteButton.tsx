import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useMemberContext } from "../../../hooks/useMemberContext";
import { ReactElement } from "react";

const DeleteButton = (): ReactElement => {
  const { handleDeleteMember } = useMemberContext();

  return (
    <button
      onClick={handleDeleteMember}
      className="bg-zinc-500 text-white hover:text-black hover:bg-zinc-300 active:bg-zinc-400 active:text-white w-[2.5rem] h-[2.5rem] rounded-md absolute right-2 -bottom-14 sm:static"
    >
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
};

export default DeleteButton;
