import { FormEvent, ReactElement } from "react";
import { useMemberContext } from "../../../../hooks/useMemberContext";

type InputProps = {
  title: string;
  name: string;
  property: string;
};

const Input = ({ title, name, property }: InputProps): ReactElement => {
  const { members, setMembers, selectedMember } = useMemberContext();

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const value =
      name === "ber"
        ? parseInt(e.currentTarget.value) | 0
        : e.currentTarget.value;

    const newMembersArray = members.map((member) => {
      if (member.id === selectedMember().id) {
        member = {
          ...selectedMember(),
          [property]: value,
        };
      }
      return member;
    });

    setMembers(newMembersArray);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-semibold mb-1 text-sm">
        {title}
      </label>
      <input
        className="rounded-md w-full sm:w-[25rem] md:w-[30rem] lg:w-[25rem] py-1 px-2 shadow-md"
        type="text"
        name={name}
        id={name}
        onInput={handleInput}
        value={selectedMember()[property] as string}
      />
      <p className="text-sm lowercase first-letter:uppercase opacity-70 mt-1 mb-2">
        Add meg a {title}t!
      </p>
    </div>
  );
};

export default Input;
