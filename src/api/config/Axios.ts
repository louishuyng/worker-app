import Axios, { AxiosInstance, Method, AxiosResponse } from 'axios';

export type REST_API_METHOD = 'get'| 'post'| 'patch'| 'put'| 'delete'

export interface RequestConfig {
  path: string;
  extraParams: string[];
  method: REST_API_METHOD;
}

const client: AxiosInstance = Axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 10000,
});

const getUrl = (endPoint: string, ...extraParams: string[]): string => {
  const extra = extraParams.length ? extraParams.join('&') : '';
  return `${endPoint}&${extra}`;
};

export const createRequest = async<RequestModel> ({
  path, extraParams, method,
}: RequestConfig) => {
  const url = getUrl(path, ...extraParams);
  let respone: any = {};
  switch (method) {
    case 'get':
      respone = client.get<RequestModel>(url);
      break;
    case 'put':
      respone = client.put<RequestModel>(url);
      break;
    case 'patch':
      respone = client.patch<RequestModel>(url);
      break;
    case 'post':
      respone = client.post<RequestModel>(url);
      break;
    case 'delete':
      respone = client.delete<RequestModel>(url);
      break;
  }
  return respone.data;
};
