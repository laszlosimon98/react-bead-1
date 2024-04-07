import { ReactElement } from "react";
import { useMemberContext } from "../../../../hooks/useMemberContext";

type PercentButtonProps = {
  value: number;
  property: string;
};

const PercentButton = ({
  value,
  property,
}: PercentButtonProps): ReactElement => {
  const { members, setMembers, selectedMember } = useMemberContext();

  const handleClick = () => {
    const salary =
      selectedMember().bsalary +
      Math.round(selectedMember().bsalary * (value / 100));

    const newMembersArray = members.map((member) => {
      if (member.id === selectedMember().id) {
        member = {
          ...selectedMember(),
          [property]: salary,
        };
      }
      return member;
    });

    setMembers(newMembersArray);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-zinc-600 py-1 px-2 my-1 mx-1 text-white rounded-md font-semibold hover:bg-zinc-800 active:bg-zinc-500 cursor-pointer h-[2rem] w-[3rem]"
      >
        {value > 0 ? "+" + value : value}%
      </button>
    </>
  );
};

export default PercentButton;
