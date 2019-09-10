import BaseAPIService from './config/baseApi.service';

export default class AuthAPI extends BaseAPIService {
  login = (values: Object) => this.client.post({
    url: 'worker/sessions',
    data: values,
  });
}
