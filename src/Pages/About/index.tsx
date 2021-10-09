import React from "react";
import { useQuery } from "react-query";
import { fetchRandom } from "../../Api/MussumIpsun";
import TextComponent from "../../Components/TextComponent";
import TitleComponent from "../../Components/TitleComponent";
import { Phrase } from "../../Types/Phrase";

const About: React.FC = () => {
  const { status, error, data } = useQuery<Phrase, Error>(["random"], () =>
    fetchRandom()
  );

  if (status === "loading") {
    return <div>Carregando...</div>;
  }
  if (status === "error") {
    return <div>{error!.message}</div>;
  }

  return (
    <>
      <TitleComponent title={"Frase Aleatória"} />
      <TextComponent text={`${data?.frase}`} />
    </>
  );
};

export default About;
