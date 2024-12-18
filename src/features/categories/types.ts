import {
  CategoriesFilter as ApiCategoriesFilter,
  SaveCategoryRequest as ApiSaveCategoryRequest,
} from '@api/clients/categories/types';

export type CategoryOptionKey = 'edit' | 'delete' | 'view';

export type SaveCategoryRequest = Omit<ApiSaveCategoryRequest, 'accountId'>;
export type CategoriesFilter = Omit<ApiCategoriesFilter, 'accountId'>;
