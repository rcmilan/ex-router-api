import axios from "axios";

const baseUrl = process.env.REACT_APP_MUSSUM_IPSUN_BASE_URL;

export const fetchParagraphs = async (paragraphs: number) => {
  const { data } = await axios.get(`${baseUrl}/paragrafos/${paragraphs}`);
  return data;
};

export const fetchRandom = async () => {
  const { data } = await axios.get(`${baseUrl}/frases/random`);
  return data;
};
