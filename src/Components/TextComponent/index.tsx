import React from "react";

type TextComponentProps = {
  text: string;
};

const TextComponent = ({ text }: TextComponentProps) => {
  return <p className="m-3">{text}</p>;
};

export default TextComponent;
