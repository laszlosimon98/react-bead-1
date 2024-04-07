import { ChangeEvent, ReactElement, useState } from "react";
import { useMemberContext } from "../../../../hooks/useMemberContext";

type SliderProps = {
  property: string;
};

type SliderDirection = "left" | "right";

const Slider = ({ property }: SliderProps): ReactElement => {
  const { members, setMembers, selectedMember } = useMemberContext();
  const [rangeValue, setRangeValue] = useState<number>(15);

  const bsalary = selectedMember()[property] as string;

  const handleDirection = (
    e: ChangeEvent<HTMLInputElement>
  ): SliderDirection => {
    const temp: SliderDirection =
      parseInt(e.target.value) > rangeValue ? "right" : "left";

    setRangeValue(parseInt(e.target.value));
    return temp;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const direction: SliderDirection = handleDirection(e);

    const calc = Math.round(
      parseInt(bsalary) * (parseInt(e.target.value) / 100)
    );

    let value: number;

    if (direction === "left") {
      value = parseInt(bsalary) - calc;
    } else {
      value = parseInt(bsalary) + calc;
    }

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
    <>
      <input
        type="range"
        min={0}
        max={30}
        step={1}
        defaultValue={rangeValue}
        className="w-full sm:w-[25rem] md:w-[30rem] lg:w-[25rem] accent-zinc-600 "
        onChange={handleChange}
      />
    </>
  );
};

export default Slider;
