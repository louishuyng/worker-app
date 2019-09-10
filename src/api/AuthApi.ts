import { createRequest, REST_API_METHOD } from './config/Axios';
import { RequestToken } from './models';
import { throwError } from 'rxjs';

export const createUser = async (data: Object) => {
  const response = await createRequest<RequestToken>({
    path: 'auth/signup',
    data,
    method: REST_API_METHOD.POST,
  }) as RequestToken;
  return response;
};

export const createToken = async (data: Object) => {
  try {
    const response = await createRequest<RequestToken>({
      path: 'workers/login',
      data,
      method: REST_API_METHOD.POST,
    }) as RequestToken;
    return response;
  } catch (err) {
    throw new Error(err);
  }
};
