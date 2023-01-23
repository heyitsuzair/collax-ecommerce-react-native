import axios from "axios";
import { Endpoints, createConfig } from "../../config";
export const placeOrder = async (orderData) => {
  try {
    const { data } = await axios.post(
      Endpoints.placeOrder,
      orderData,
      createConfig
    );
    return data;
  } catch (error) {
    return error.response.data;
  }
};
