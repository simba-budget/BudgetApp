import { useAppSelector } from '@core/store/store';
import { flex1 } from '@styles/common';
import React from 'react';
import { View } from 'react-native';

import { CategoriesList } from '../components';
import { useCategories } from '../hooks';
import { selectApiCategoriesFilter, selectCategoriesSort } from '../selectors';

const Categories = () => {
  const filter = useAppSelector(selectApiCategoriesFilter);
  const sort = useAppSelector(selectCategoriesSort);

  const { categories, isLoading, isRefetching, refetch } = useCategories({
    filter,
    sort,
  });

  return (
    <View style={flex1}>
      <CategoriesList
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        categories={categories}
      />
    </View>
  );
};

export default Categories;
