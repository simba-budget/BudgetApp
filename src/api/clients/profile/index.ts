import httpClient from '@api/httpClient';
import { DataResponse } from '@api/types';

import { Profile, SaveLocaleRequest, SaveProfileRequest } from './types';

const url = '/profile';

export const saveLocale = (request: SaveLocaleRequest) => {
  return httpClient.put<void, DataResponse<Profile>>(`${url}/locale`, request);
};

export const saveProfile = (request: SaveProfileRequest) => {
  return httpClient.put<void, DataResponse<Profile>>(url, request);
};

export const deleteAccount = () => {
  return httpClient.delete(url);
};

export const getProfile = () => {
  return httpClient.get<void, DataResponse<Profile>>(url);
};
