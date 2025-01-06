import httpClient from '@api/httpClient';
import { DataResponse, ListResponse } from '@api/types';

import {
  ListTransactionsRequest,
  SaveTransactionRequest,
  Transaction,
  TransactionsFilter,
  TransactionsStatsResponse,
} from './types';

const url = '/transactions';

export const getTransactions = (request: ListTransactionsRequest) => {
  const params = { ...request.filter, ...request.sort, ...request.paging };
  return httpClient.get<void, ListResponse<Transaction>>(url, { params });
};

export const getTransactionsStats = (filter: TransactionsFilter) => {
  const params = { ...filter };
  return httpClient.get<void, TransactionsStatsResponse>(`${url}/stats`, { params });
};

export const getTransaction = (id: number) => {
  return httpClient.get<void, DataResponse<Transaction>>(`${url}/${id}`);
};

export const addTransaction = (request: SaveTransactionRequest) => {
  return httpClient.post<void, DataResponse<Transaction>>(url, request);
};

export const editTransaction = (id: number, request: SaveTransactionRequest) => {
  return httpClient.put<void, DataResponse<Transaction>>(`${url}/${id}`, request);
};

export const deleteTransaction = (id: number) => {
  return httpClient.delete(`${url}/${id}`);
};
