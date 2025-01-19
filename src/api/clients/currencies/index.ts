import httpClient from '@api/httpClient';
import { ListResponse } from '@api/types';

import { Currency, ListCurrenciesRequest } from './types';

const url = '/currencies';

export const getCurrencies = (request: ListCurrenciesRequest) => {
  const params = { ...request.filter, ...request.sort, ...request.paging };
  return httpClient.get<void, ListResponse<Currency>>(url, { params });
};
