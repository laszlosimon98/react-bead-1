import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { addMember } from "../../../store/features/members/membersSlice";

const AddButton = (): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => {
        dispatch(addMember());
      }}
      className="bg-zinc-300 text-black  hover:bg-zinc-400 active:bg-zinc-400 active:text-white  w-[2.5rem] h-[2.5rem] rounded-md"
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

export default AddButton;
