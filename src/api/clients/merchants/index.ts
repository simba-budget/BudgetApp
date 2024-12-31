import httpClient from '@api/httpClient';
import { DataResponse, ListResponse } from '@api/types';

import { ListMerchantsRequest, Merchant, SaveMerchantRequest } from './types';

const url = '/merchants';

export const getMerchants = (request: ListMerchantsRequest) => {
  const params = { ...request.filter, ...request.sort, ...request.paging };
  return httpClient.get<void, ListResponse<Merchant>>(url, { params });
};

export const getMerchant = (id: number) => {
  return httpClient.get<void, DataResponse<Merchant>>(`${url}/${id}`);
};

export const addMerchant = (request: SaveMerchantRequest) => {
  return httpClient.post<void, DataResponse<Merchant>>(url, request);
};

export const editMerchant = (id: number, request: SaveMerchantRequest) => {
  return httpClient.put<void, DataResponse<Merchant>>(`${url}/${id}`, request);
};

export const deleteMerchant = (id: number) => {
  return httpClient.delete(`${url}/${id}`);
};
