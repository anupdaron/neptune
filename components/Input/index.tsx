import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: FC<InputProps> = ({ label, error, ...props }) => {
  const inputClassName = `w-full rounded border-gray-400 ${
    error ? "border-red-500" : "border-gray-400"
  }`;

  return (
    <div className="mb-4">
      <div className=" mb-6">
        <div className="md:w-1/3">
          <label className="block  font-bold  mb-1 md:mb-0 pr-4">{label}</label>
        </div>
        <div>
          <input
            className={`${inputClassName}  bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-700`}
            {...props}
          />
        </div>
      </div>
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};

export default Input;
