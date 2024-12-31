import httpClient from '@api/httpClient';
import { DataResponse, ListResponse } from '@api/types';

import { Account, ListAccountsRequest, SaveAccountRequest } from './types';

const url = '/accounts';

export const getAccounts = (request: ListAccountsRequest) => {
  const params = { ...request.filter, ...request.sort, ...request.paging };
  return httpClient.get<void, ListResponse<Account>>(url, { params });
};

export const getAccount = (id: number) => {
  return httpClient.get<void, DataResponse<Account>>(`${url}/${id}`);
};

export const addAccount = (request: SaveAccountRequest) => {
  return httpClient.post<void, DataResponse<Account>>(url, request);
};

export const editAccount = (id: number, request: SaveAccountRequest) => {
  return httpClient.put<void, DataResponse<Account>>(`${url}/${id}`, request);
};

export const deleteAccount = (id: number) => {
  return httpClient.delete(`${url}/${id}`);
};
