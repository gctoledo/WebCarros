type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => {
  return (
    <div>
      <input className="w-full border-2 rounded-md h-11 px-2" {...props} />
    </div>
  );
};

export default Input;
