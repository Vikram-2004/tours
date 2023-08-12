import { FC } from "react";

interface ButtonProps {
  label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <div>
      <button className="bg-cyan-400 rounded-lg text-white text-lg w-full px-4 py-2 uppercase  hover:bg-cyan-500">
        {label}
      </button>
    </div>
  );
};

export default Button;
