import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  transparent?: boolean;
}

const Button = ({ children, transparent, ...rest }: Props) => {
  const classes = `text-gray-500 bg-${
    transparent ? "transparent text-blue-500" : "white"
  } ${transparent ? "border-0" : "border"} cursor-pointer`;

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
