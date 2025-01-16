import { Category } from '@api/clients/categories/types';
import { SelectOption } from '@common/components/Select';

import { SaveCategoryRequest } from './types';

export const mapSaveCategoryRequest = (
  category?: Category | null,
): SaveCategoryRequest => ({
  name: category?.name ?? '',
  icon: category?.icon ?? '',
});

export const mapCategoryToOption = (category: Category): SelectOption<number> => ({
  key: category.id.toString(),
  value: category.id,
  label: category.name,
  iconName: 'card',
});
