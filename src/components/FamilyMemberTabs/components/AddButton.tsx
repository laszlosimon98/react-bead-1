import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useMemberContext } from "../../../hooks/useMemberContext";
import { ReactElement } from "react";

const AddButton = (): ReactElement => {
  const { handleAddMember } = useMemberContext();

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
