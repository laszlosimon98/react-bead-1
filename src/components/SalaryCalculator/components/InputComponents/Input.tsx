import { ChangeEvent, ReactElement } from "react";
import {
  MemberState,
  updateMember,
  updateNet,
} from "../../../../store/features/members/membersSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";

type InputProps = {
  title: string;
  name: string;
  property: string;
  inputType: "text" | "number";
};

const Input = ({
  title,
  name,
  property,
  inputType,
}: InputProps): ReactElement => {
  const selectedMember: MemberState = useAppSelector((state) =>
    state.members.find((member) => member.isSelected)
  ) as MemberState;

  const dispatch = useAppDispatch();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value =
      inputType === "number" ? parseInt(e.target.value) | 0 : e.target.value;

    dispatch(updateMember({ property, value }));
    dispatch(updateNet());
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-semibold mb-1 text-sm">
        {title}
      </label>
      <input
        className="rounded-md w-full sm:w-[25rem] md:w-[30rem] lg:w-[25rem] py-1 px-2 shadow-lg"
        type="text"
        name={name}
        id={name}
        onInput={handleInput}
        value={selectedMember[property] as string}
      />
      <p className="text-sm lowercase first-letter:uppercase opacity-70 mt-1 mb-2">
        Add meg a {title}t!
      </p>
    </div>
  );
};

export default Input;
