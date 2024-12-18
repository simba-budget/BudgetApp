import { Category, SaveCategoryRequest } from '@api/clients/categories/types';

export const mapSaveCategoryRequest = (category?: Category | null): SaveCategoryRequest => ({
  name: category?.name ?? '',
  accountId: 0,
});
