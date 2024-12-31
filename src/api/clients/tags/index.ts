import httpClient from '@api/httpClient';
import { DataResponse, ListResponse } from '@api/types';

import { ListTagsRequest, SaveTagRequest, Tag } from './types';

const url = '/tags';

export const getTags = (request: ListTagsRequest) => {
  const params = { ...request.filter, ...request.sort, ...request.paging };
  return httpClient.get<void, ListResponse<Tag>>(url, { params });
};

export const getTag = (id: number) => {
  return httpClient.get<void, DataResponse<Tag>>(`${url}/${id}`);
};

export const addTag = (request: SaveTagRequest) => {
  return httpClient.post<void, DataResponse<Tag>>(url, request);
};

export const editTag = (id: number, request: SaveTagRequest) => {
  return httpClient.put<void, DataResponse<Tag>>(`${url}/${id}`, request);
};

export const deleteTag = (id: number) => {
  return httpClient.delete(`${url}/${id}`);
};
