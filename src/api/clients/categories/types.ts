import { BaseModel } from '@api/types';

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
