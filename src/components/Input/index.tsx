import { RegisterOptions, UseFormRegister } from "react-hook-form";

type InputProps = {
  placeholder: string;
  type: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
};

const Input = ({
  name,
  type,
  placeholder,
  register,
  error,
  rules,
}: InputProps) => {
  return (
    <div>
      <input
        className="w-full border-2 rounded-md h-11 px-2"
        placeholder={placeholder}
        type={type}
        id={name}
        {...register(name, rules)}
      />
      {error && <p className="my-1 text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
