import { BaseModel, ListRequest, Sort } from '@api/types';

export interface Category extends BaseModel {
  name: string;
  icon: string;
}

export interface SaveCategoryRequest {
  name: string;
  accountId: number;
  icon: string;
}

export interface CategoriesFilter {
  keyword?: string | null;
  accountId: number;
}

export type CategoriesSort = Sort<'name'>;
export type ListCategoriesRequest = ListRequest<CategoriesFilter, CategoriesSort>;
