import {READ_TOKEN, CREATE_TOKEN} from '@env';
export const getConfig = {
  headers: {
    Authorization: 'Bearer ' + READ_TOKEN,
  },
};
export const createConfig = {
  headers: {
    Authorization: 'Bearer ' + CREATE_TOKEN,
  },
};
