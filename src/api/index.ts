import RestAPI from './config/restApi';
import AuthAPI from './AuthApi';

const restAPI = new RestAPI();

export const authApi = new AuthAPI(restAPI);
