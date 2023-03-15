import React from "react";

type Props = {
  children: React.ReactNode;
};

const Card: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <div className="glass rounded overflow-hidden shadow-lg px-10 py-5 bg-white w-96">
      {children}
    </div>
  );
};

export default Card;
