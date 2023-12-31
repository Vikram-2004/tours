import { FC } from "react";

interface InputProps {
  label: string;
  onChange: (e: any) => void;
  type: string;
  value: string;
  placeholder: string;
}

const Input: FC<InputProps> = ({
  label,
  onChange,
  type,
  value,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-md font-medium pb-1 text-slate-500 monts
        peer-invalid:visible
       peer-invalid:text-pink-600
       "
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        className="
        invalid:border-b-2
        invalid:border-red-500 invalid:text-red-600
      focus:invalid:border-red-500 focus:invalid:ring-red-500
        peer
        block
        rounded-md
        px-4
        pt-2
        pb-2
        w-full
        text-gray-800
        bg-neutral-200
        focus:border-b-green-400
        focus:border-b-2
        focus:outline-0
        focus:ring-0
        appearance-none
        text-md
        monts
        "
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
