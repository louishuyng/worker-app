import axios, { AxiosInstance } from 'axios';

const baseConfig = {
  baseURL: 'http://localhost:3000/api',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
  timeOut: 30000,
};

interface RequestObjectAxios {
  url: any;
  data: Object;
  __skipProviderToken?: boolean;
  __skipDefaultHandleError?: boolean;
  [key: string]: any
}

export default class RestAPI {
  private axios: AxiosInstance;

  constructor(config = {}) {
    const mergedConfig = { ...baseConfig, ...config };
    this.axios = axios.create(mergedConfig);
    this.catchError = this.catchError.bind(this);
  }

  catchError = (error: any) => {
    throw error;
  };

  setToken = (token: string) => {
    this.axios.defaults.headers.common.Authorization = `Token ${token}`;
  };

  removeToken = () => {
    delete this.axios.defaults.headers.common.Authorization;
  };

  baseExecute = (method: string) => (options: RequestObjectAxios) => this.execute({ method, ...options });

  get = this.baseExecute('get');

  post = this.baseExecute('post');

  put = this.baseExecute('put');

  patch = this.baseExecute('patch');

  delete = this.baseExecute('delete');

  execute = async ({
    method, url, __skipProviderToken = false, __skipDefaultHandleError = false, ...rest
  }: RequestObjectAxios) => {
    // const token = localStorage.getItem('token');
    // if (!__skipProviderToken && token) this.setToken(token);
    // else this.removeToken();
    try {
      return await this.axios({ method, url, ...rest });
    } catch (e) {
      if (!__skipDefaultHandleError) return this.catchError(e);
      throw e;
    }
  };
}
