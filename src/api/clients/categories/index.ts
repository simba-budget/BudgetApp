import httpClient from '@api/httpClient';
import { DataResponse, ListResponse } from '@api/types';

import { Category, ListCategoriesRequest, SaveCategoryRequest } from './types';

const url = '/categories';

export const getCategories = (request: ListCategoriesRequest) => {
  const params = { ...request.filter, ...request.sort, ...request.paging };
  return httpClient.get<void, ListResponse<Category>>(url, { params });
};

export const getCategory = (id: number) => {
  return httpClient.get<void, DataResponse<Category>>(`${url}/${id}`);
};

export const addCategory = (request: SaveCategoryRequest) => {
  return httpClient.post<void, DataResponse<Category>>(url, request);
};

export const editCategory = (id: number, request: SaveCategoryRequest) => {
  return httpClient.put<void, DataResponse<Category>>(`${url}/${id}`, request);
};

export const deleteCategory = (id: number) => {
  return httpClient.delete(`${url}/${id}`);
};
