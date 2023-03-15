import React from "react";
import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  transparent?: boolean;
  outlined?: boolean;
  variant?: "primary" | "secondary" | "danger";
  full?: boolean;
}

const Button = ({
  children,
  transparent,
  variant = "primary",
  outlined,
  ...rest
}: Props) => {
  const baseClasses =
    "px-4 py-2 font-medium text-center uppercase rounded-lg focus:outline-none";

  const classes = classNames(baseClasses, {
    "bg-indigo-500 text-white hover:bg-indigo-600": variant === "primary",
    "bg-transparent text-indigo-500 border border-indigo-500 hover:bg-indigo-50":
      outlined,
    "bg-transparent text-indigo-500 hover:bg-indigo-50": transparent,
    "bg-red-400 text-white hover:bg-red-600": variant === "danger",
    "bg-green-500 text-white hover:bg-green-600": variant === "secondary",
    "w-full": rest.full,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
