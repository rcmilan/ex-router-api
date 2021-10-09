import React from "react";
import { useQuery } from "react-query";
import { fetchRandom } from "../../Api/MussumIpsun";
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
      <p>Frase Aleatória</p>
      <p>{data?.frase}</p>
    </>
  );
};

export default About;
