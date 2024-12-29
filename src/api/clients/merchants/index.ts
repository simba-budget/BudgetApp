import httpClient from '@api/httpClient';
import { DataResponse, ListRequest, ListResponse } from '@api/types';

import { Merchant, MerchantsFilter, SaveMerchantRequest } from './types';

const url = '/merchants';

export const getMerchants = (request: ListRequest<MerchantsFilter>) => {
  const params = { ...request.filter };
  return httpClient.get<void, ListResponse<Merchant>>(url, { params });
};

export const getMerchant = (id: number) => {
  return httpClient.get<void, DataResponse<Merchant>>(`${url}/${id}`);
};

export const addMarchant = (request: SaveMerchantRequest) => {
  return httpClient.post<void, DataResponse<Merchant>>(url, request);
};

export const editMerchant = (id: number, request: SaveMerchantRequest) => {
  return httpClient.put<void, DataResponse<Merchant>>(`${url}/${id}`, request);
};

export const deleteMerchant = (id: number) => {
  return httpClient.delete(`${url}/${id}`);
};
