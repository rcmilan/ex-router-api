import React from "react";
import CatFormComponent from "../../Components/CatFormComponent";
import TitleComponent from "../../Components/TitleComponent";

const Cat: React.FC = () => {
  return (
    <>
      <TitleComponent title="Cats-Api-Backend" />
      <CatFormComponent />
    </>
  );
};

export default Cat;
