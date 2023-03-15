import React from "react";
import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  transparent?: boolean;
  outlined?: boolean;
  variant?: "primary" | "secondary" | "danger";
  full?: boolean;
}

const Button = ({ children, transparent, outlined, ...rest }: Props) => {
  const baseClasses =
    "px-4 py-2 font-medium text-center uppercase rounded-lg focus:outline-none";

  const classes = classNames(baseClasses, {
    "bg-blue-500 text-white hover:bg-blue-600": !transparent && !outlined,
    "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-50":
      outlined,
    "bg-transparent text-blue-500 hover:bg-blue-50": transparent,
    "bg-red-400 text-white hover:bg-red-600": rest.variant === "danger",
    "bg-green-500 text-white hover:bg-green-600": rest.variant === "secondary",
    "w-full": rest.full,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
