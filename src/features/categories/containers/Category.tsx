import { AccountNavigation, toCategoryEdit } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { CategoryDetails } from '../components';
import { useCategory } from '../hooks';

export interface CategoryProps {
  id: number;
}

const Category = ({ id }: CategoryProps) => {
  const navigation = useNavigation<AccountNavigation>();
  const { category, refetch, isRefetching, isLoading } = useCategory(id);

  const handleOnEditPress = useCallback(
    () => toCategoryEdit(navigation, { id }),
    [navigation, id],
  );

  return (
    <CategoryDetails
      category={category}
      isLoading={isLoading}
      isRefreshing={isRefetching}
      onRefresh={refetch}
      onEditPress={handleOnEditPress}
    />
  );
};

export default Category;
