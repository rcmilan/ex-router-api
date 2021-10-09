import React from "react";

type TitleComponentProps = {
  title: string;
};

const TitleComponent = ({ title }: TitleComponentProps) => {
  return <h1 className="font-bold text-xl m-5">{title}</h1>;
};

export default TitleComponent;
