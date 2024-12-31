import httpClient from '@api/httpClient';
import { DataResponse, ListResponse } from '@api/types';

import { Goal, ListGoalsRequest, SaveGoalRequest } from './types';

const url = '/goals';

export const getGoals = (request: ListGoalsRequest) => {
  const params = { ...request.filter, ...request.sort, ...request.paging };
  return httpClient.get<void, ListResponse<Goal>>(url, { params });
};

export const getGoal = (id: number) => {
  return httpClient.get<void, DataResponse<Goal>>(`${url}/${id}`);
};

export const addGoal = (request: SaveGoalRequest) => {
  return httpClient.post<void, DataResponse<Goal>>(url, request);
};

export const editGoal = (id: number, request: SaveGoalRequest) => {
  return httpClient.put<void, DataResponse<Goal>>(`${url}/${id}`, request);
};

export const deleteGoal = (id: number) => {
  return httpClient.delete(`${url}/${id}`);
};
