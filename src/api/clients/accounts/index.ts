import httpClient from '@api/httpClient';
import { DataResponse, ListResponse } from '@api/types';

import { Account, SaveAccountRequest } from './types';

const url = '/accounts';

export const getAccounts = () => {
  return httpClient.get<void, ListResponse<Account>>(url);
};

export const getAccount = (id: number) => {
  return httpClient.get<void, DataResponse<Account>>(`${url}/${id}`);
};

export const addAccount = (request: SaveAccountRequest) => {
  return httpClient.post<SaveAccountRequest, DataResponse<Account>>(url, request);
};

export const deleteAccount = (id: number) => {
  return httpClient.delete(`${url}/${id}`);
};

export const editAccount = (id: number, request: SaveAccountRequest) => {
  return httpClient.put<SaveAccountRequest, DataResponse<Account>>(`${url}/${id}`, request);
};
