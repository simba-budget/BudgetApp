import { Category } from '@api/clients/categories/types';

import { SaveCategoryRequest } from './types';

export const mapSaveCategoryRequest = (
  category?: Category | null,
): SaveCategoryRequest => ({
  name: category?.name ?? '',
});
