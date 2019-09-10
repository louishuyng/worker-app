import RestAPI from './restApi';

export default class BaseAPIService {
  protected client: RestAPI;

  constructor(api: RestAPI = new RestAPI()) {
    this.client = api;
  }
}
