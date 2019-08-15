import Axios, { AxiosInstance } from 'axios';

export const client: AxiosInstance = Axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 10000,
});

export const getUrl = (endPoint: string, ...extraParams: string[]): string => {
  const extra = extraParams.length ? extraParams.join('&') : '';
  return `${endPoint}&${extra}`;
};
