import { Category } from '@api/clients/categories/types';
import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { AccountNavigation, toCategory } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { CategoriesList, CategoriesSearch } from '../components';
import { useCategories } from '../hooks';
import { selectCategoriesFilter } from '../selectors';
import { updateKeyword } from '../slice';

const Categories = () => {
  const navigation = useNavigation<AccountNavigation>();
  const dispatch = useAppDispatch();
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const filter = useAppSelector(selectCategoriesFilter);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { categories, isLoading, isRefetching, refetch } = useCategories({
    accountId,
    filter: debouncedFilter,
  });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  const handleOnCategoryPress = useCallback(
    (category: Category) => toCategory(navigation, { id: category.id }),
    [navigation],
  );

  return (
    <View style={flex1}>
      <CategoriesSearch onKeywordChange={handleOnKeywordChange} keyword={filter?.keyword} />
      <CategoriesList
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        categories={categories}
        onCategoryPress={handleOnCategoryPress}
      />
    </View>
  );
};

export default Categories;
