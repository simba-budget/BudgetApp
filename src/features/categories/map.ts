import { Category } from '@api/clients/categories/types';
import { SelectOption } from '@common/v2/components';

import { SaveCategoryRequest } from './types';

export const mapSaveCategoryRequest = (
  category?: Category | null,
): SaveCategoryRequest => ({
  name: category?.name ?? '',
});

export const mapCategoryToOption = (category: Category): SelectOption => ({
  value: category.id,
  label: category.name,
  iconName: 'card',
});
