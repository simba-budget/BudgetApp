import httpClient from '@api/httpClient';
import { DataResponse, ListResponse } from '@api/types';

import { ExternalAccount, ListExternalAccountsRequest } from './types';

const url = '/external-accounts';

export const getExternalAccounts = (request: ListExternalAccountsRequest) => {
  const params = { ...request.filter, ...request.sort, ...request.paging };
  return httpClient.get<void, ListResponse<ExternalAccount>>(url, { params });
};

export const getExternalAccount = (id: number) => {
  return httpClient.get<void, DataResponse<ExternalAccount>>(`${url}/${id}`);
};

export const deleteExternalAccount = (id: number) => {
  return httpClient.delete(`${url}/${id}`);
};
