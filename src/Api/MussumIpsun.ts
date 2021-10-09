import axios from "axios";

const baseUrl = "https://mipsum.herokuapp.com";

export const fetchParagraphs = async (paragraphs: number) => {
  const { data } = await axios.get(`${baseUrl}/paragrafos/${paragraphs}`);
  return data;
};
