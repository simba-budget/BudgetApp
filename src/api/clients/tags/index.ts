import httpClient from '@api/httpClient';
import { DataResponse, ListRequest, ListResponse } from '@api/types';

import { SaveTagRequest, Tag, TagsFilter } from './types';

const url = '/tags';

export const getTags = (request: ListRequest<TagsFilter>) => {
  const params = { ...request.filter };
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
