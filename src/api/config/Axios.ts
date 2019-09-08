import Axios, { AxiosInstance } from 'axios';

export enum REST_API_METHOD {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
}

export interface RequestConfig {
  path: string;
  extraParams?: string;
  method: REST_API_METHOD;
  data: Object,
}

const client: AxiosInstance = Axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 10000,
});

const getUrl = (endPoint: string, extraParams: string): string => {
  if (extraParams) return `${endPoint}/${extraParams}`;
  return endPoint;
};

export const createRequest = async<RequestModel> ({
  path, extraParams, method, data,
}: RequestConfig) => {
  const url = getUrl(path, extraParams as string);
  let respone: any = {};
  switch (method) {
    case REST_API_METHOD.GET:
      respone = await client.get<RequestModel>(url, data);
      break;
    case REST_API_METHOD.PUT:
      respone = await client.put<RequestModel>(url, data);
      break;
    case REST_API_METHOD.PATCH:
      respone = await client.patch<RequestModel>(url, data);
      break;
    case REST_API_METHOD.POST:
      respone = await client.post<RequestModel>(url, data);
      break;
    case REST_API_METHOD.DELETE:
      respone = await client.delete<RequestModel>(url, data);
      break;
  }
  return respone;
};
