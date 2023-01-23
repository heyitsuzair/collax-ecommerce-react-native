import {BASE_URL} from '@env';
export const Endpoints = {
  // Products
  getProducts: BASE_URL + 'api/products?populate=*',
  getProduct: BASE_URL + 'api/products',

  // Orders
  placeOrder: BASE_URL + 'api/place-order',

  // Contact
  sendMessage: BASE_URL + 'api/submissions',
};
