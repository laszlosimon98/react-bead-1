type InputProps = {
  title: string;
  name: string;
};

const Input = ({ title, name }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="font-semibold mb-1 text-sm">
        {title}
      </label>
      <input
        className="rounded-md w-full sm:w-[25rem] md:w-[30rem] lg:w-[25rem] py-1 px-2"
        type="text"
        name={name}
        id={name}
      />
      <p className="text-sm lowercase first-letter:uppercase opacity-70 mt-1 mb-2">
        Add meg a {title}t!
      </p>
    </div>
  );
};

export default Input;
