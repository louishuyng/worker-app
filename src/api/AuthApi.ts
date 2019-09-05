import { createRequest, REST_API_METHOD } from './config/Axios';
import { RequestToken } from './models';

export const createUser = async () => {
  const response = await createRequest<RequestToken>({
    path: 'auth/signup',
    data: {

    },
    method: REST_API_METHOD.POST,
  });
  return response.data;
};

export const createToken = async () => {
  const response = await createRequest<RequestToken>({
    path: 'auth/signin',
    data: {

    },
    method: REST_API_METHOD.POST,
  });
  return response.data;
};
