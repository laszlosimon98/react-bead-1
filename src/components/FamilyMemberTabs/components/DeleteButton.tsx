import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { deleteMember } from "../../../store/features/members/membersSlice";

const DeleteButton = (): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(deleteMember())}
      className="bg-zinc-500 text-white hover:text-black hover:bg-zinc-300 active:bg-zinc-400 active:text-white w-[2.5rem] h-[2.5rem] rounded-md absolute right-2 -bottom-14 sm:static"
    >
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
};

export default DeleteButton;
