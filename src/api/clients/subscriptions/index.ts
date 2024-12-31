import httpClient from '@api/httpClient';
import { DataResponse, ListResponse } from '@api/types';

import {
  ListSubscriptionsRequest,
  SaveSubscriptionRequest,
  Subscription,
} from './types';

const url = '/subscriptions';

export const getSubscriptions = (request: ListSubscriptionsRequest) => {
  const params = { ...request.filter, ...request.sort, ...request.paging };
  return httpClient.get<void, ListResponse<Subscription>>(url, { params });
};

export const getSubscription = (id: number) => {
  return httpClient.get<void, DataResponse<Subscription>>(`${url}/${id}`);
};

export const addSubscription = (request: SaveSubscriptionRequest) => {
  return httpClient.post<void, DataResponse<Subscription>>(url, request);
};

export const editSubscription = (id: number, request: SaveSubscriptionRequest) => {
  return httpClient.put<void, DataResponse<Subscription>>(`${url}/${id}`, request);
};

export const deleteSubscription = (id: number) => {
  return httpClient.delete(`${url}/${id}`);
};
