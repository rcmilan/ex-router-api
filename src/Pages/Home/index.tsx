import React from "react";
import { useQuery } from "react-query";
import { fetchParagraphs } from "../../Api/MussumIpsun";
import { Paragraph } from "../../Types/Paragraph";

const Home: React.FC = () => {
  const paragraphsQtd = 5;

  const { status, error, data } = useQuery<Paragraph, Error>(
    ["paragraphs", paragraphsQtd],
    () => fetchParagraphs(paragraphsQtd)
  );

  if (status === "loading") {
    return <div>Carregando...</div>;
  }
  if (status === "error") {
    return <div>{error!.message}</div>;
  }

  return (
    <>
      <p>Buscando {paragraphsQtd} paragrafos</p>
      <p>{data?.paragrafos}</p>
    </>
  );
};

export default Home;
