import axios from "axios";
import { Endpoints, getConfig } from "../../config";
export const getProducts = async (page) => {
  try {
    const { data } = await axios.get(
      Endpoints.getProducts +
        `&pagination[pageSize]=8&pagination[page]=${page}`,
      getConfig
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};
export const getRelatedProducts = async (slug) => {
  try {
    const { data } = await axios.get(
      Endpoints.getProducts + `?filters[slug][$ne]=${slug}&populate=*`,
      getConfig
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};
export const getProduct = async (slug) => {
  try {
    const { data } = await axios.get(
      Endpoints.getProduct + `?filters[slug][$eq]=${slug}&populate=*`,
      getConfig
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};
