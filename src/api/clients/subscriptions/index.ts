import httpClient from '@api/httpClient';
import { DataResponse, ListRequest, ListResponse } from '@api/types';

import { SaveSubscriptionRequest, Subscription, SubscriptionsFilter } from './types';

const url = '/subscriptions';

export const getSubscriptions = (request: ListRequest<SubscriptionsFilter>) => {
  const params = { ...request.filter };
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
