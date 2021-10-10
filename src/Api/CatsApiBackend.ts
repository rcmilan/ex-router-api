import axios from "axios";
import { Cat } from "../Types/Cat";

const baseUrl = process.env.REACT_APP_CATS_API_BASE_URL;

// Erro de CORS
export const postCat = async (cat: Cat) => {
  const { data } = await axios.post(`${baseUrl}/cats`, cat);

  return data;
};
