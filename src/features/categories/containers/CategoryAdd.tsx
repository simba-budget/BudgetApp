import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useCategoriesTranslations } from '@i18n/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { CategoryForm } from '../components';
import { useAddCategory, useCategoryForm } from '../hooks';

const CategoryAdd = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<RootNavigation>();
  const { t } = useCategoriesTranslations();
  const { handleSubmit, control } = useCategoryForm();

  const { addCategory, isSubmitting } = useAddCategory({
    onSuccess: goBack,
    accountId,
  });

  return (
    <CategoryForm
      title={t('Create Category')}
      onSubmit={handleSubmit(addCategory)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default CategoryAdd;
