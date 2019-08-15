import { getUrl, client } from './config/Axios';
import { RequestToken } from './models';

export const createRequestToken = async () => {
  const url = getUrl('authentication/token');
  const respone = await client.get<RequestToken>(url);
  return respone.data;
};
