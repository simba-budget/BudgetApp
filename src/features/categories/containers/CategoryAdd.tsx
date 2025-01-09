import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useCategoriesTranslations } from '@i18n/hooks';
import {
  categoriesRoute,
  RootNavigation,
  toSuccess,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { CategoryForm } from '../components';
import { useAddCategory, useCategoryForm } from '../hooks';

const CategoryAdd = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const navigation = useNavigation<RootNavigation>();
  const { handleSubmit, control } = useCategoryForm();
  const { t } = useCategoriesTranslations();

  const handleOnSuccess = useCallback(
    () =>
      toSuccess(navigation, {
        title: t('Category is successfully saved!'),
        description: t('Lorem Ipsum is simply dummy text of the printing and'),
        onCtaPress: () => navigation.replace(categoriesRoute),
        ctaTitle: t('See All Categories'),
        iconName: 'squaresPlus',
      }),
    [navigation, t],
  );

  const { addCategory, isSubmitting } = useAddCategory({
    onSuccess: handleOnSuccess,
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
