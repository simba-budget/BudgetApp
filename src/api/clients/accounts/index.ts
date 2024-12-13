import httpClient from '@api/httpClient';
import { DataResponse, ListRequest, ListResponse } from '@api/types';

import { Account, AccountsFilter, SaveAccountRequest } from './types';

const url = '/accounts';

export const getAccounts = (request: ListRequest<AccountsFilter>) => {
  const params = { ...request.filter };
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
