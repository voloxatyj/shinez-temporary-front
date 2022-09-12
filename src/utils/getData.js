import axios from 'axios';
import config from '../config/config';

export const getData = async () => {
  const { data } = await axios.get(`${config.baseUrl}/api/article/all`, {
    params: { criteria: 50 },
  });
  return data;
};
