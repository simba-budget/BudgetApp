import { store } from '@core/store/store';
import { API_URL } from '@env';
import axios from 'axios';
import omitBy from 'lodash/omitBy';

const httpClient = axios.create({ baseURL: API_URL });

httpClient.interceptors.request.use(async (request) => {
  const { token } = store.getState().auth;
  if (token) request.headers.Authorization = `Bearer ${token}`;
  if (request.params) request.params = omitBy(request.params, (value) => !value);
  return request;
});

httpClient.interceptors.response.use(async (response) => response.data);

export default httpClient;
