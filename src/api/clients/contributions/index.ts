import httpClient from '@api/httpClient';
import { DataResponse, ListRequest, ListResponse } from '@api/types';

import { Contribution, ContributionsFilter, SaveContributionRequest } from './types';

const url = '/contributions';

export const getContributions = (request: ListRequest<ContributionsFilter>) => {
  const params = { ...request.filter };
  return httpClient.get<void, ListResponse<Contribution>>(url, { params });
};

export const getContribution = (id: number) => {
  return httpClient.get<void, DataResponse<Contribution>>(`${url}/${id}`);
};

export const addContribution = (request: SaveContributionRequest) => {
  return httpClient.post<void, DataResponse<Contribution>>(url, request);
};

export const editContribution = (id: number, request: SaveContributionRequest) => {
  return httpClient.put<void, DataResponse<Contribution>>(`${url}/${id}`, request);
};

export const deleteContribution = (id: number) => {
  return httpClient.delete(`${url}/${id}`);
};
