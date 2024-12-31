import { BaseModel, ListRequest, Sort } from '@api/types';

import { Member } from '../members/types';

export interface Category extends BaseModel {
  name: string;
  balance: number;
  createdBy: Member;
}

export interface SaveCategoryRequest {
  name: string;
  accountId: number;
}

export interface CategoriesFilter {
  keyword?: string | null;
  accountId: number;
}

export type CategoriesSort = Sort<'name'>;
export type ListCategoriesRequest = ListRequest<CategoriesFilter, CategoriesSort>;
