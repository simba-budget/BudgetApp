import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useCategoriesTranslations } from '@i18n/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { CategoryForm } from '../components';
import { useCategory, useCategoryForm, useEditCategory } from '../hooks';
import { mapSaveCategoryRequest } from '../map';
import { SaveCategoryRequest } from '../types';

export interface CategoryEditProps {
  id: number;
}

const CategoryEdit = ({ id }: CategoryEditProps) => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { t } = useCategoriesTranslations();
  const { goBack } = useNavigation<RootNavigation>();
  const { category, isLoading } = useCategory(id);
  const { handleSubmit, control, reset } = useCategoryForm();
  const { editCategory, isSubmitting } = useEditCategory({ onSuccess: goBack });

  const handleOnSubmit = (request: SaveCategoryRequest) => {
    return editCategory({ id, ...request, accountId });
  };

  useEffect(() => {
    if (category) reset(mapSaveCategoryRequest(category));
  }, [category, reset]);

  return (
    <CategoryForm
      title={t('Edit Category')}
      onSubmit={handleSubmit(handleOnSubmit)}
      isSubmitting={isSubmitting}
      control={control}
      isDisabled={isLoading}
    />
  );
};

export default CategoryEdit;
