import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { AccountNavigation } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { CategoryForm } from '../components';
import { useAddCategory, useCategoryForm } from '../hooks';

const CategoryAdd = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const { goBack } = useNavigation<AccountNavigation>();
  const { handleSubmit, control } = useCategoryForm();
  const { addCategory, isSubmitting } = useAddCategory({ onSuccess: goBack, accountId });

  return (
    <CategoryForm
      onSubmit={handleSubmit(addCategory)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default CategoryAdd;
