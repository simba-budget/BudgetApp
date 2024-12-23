import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { useDebounce } from 'use-debounce';

import { CategoriesList, CategoriesSearch } from '../components';
import { useCategories } from '../hooks';
import { selectCategoriesFilter } from '../selectors';
import { updateKeyword } from '../slice';

const Categories = () => {
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

  return (
    <SafeAreaView style={flex1}>
      <CategoriesSearch onKeywordChange={handleOnKeywordChange} keyword={filter?.keyword} />
      <CategoriesList
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        categories={categories}
        onCategoryPress={console.log}
      />
    </SafeAreaView>
  );
};

export default Categories;
