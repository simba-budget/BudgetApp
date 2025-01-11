import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { flex1 } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { CategoriesList, CategoriesSearch } from '../components';
import { useCategories } from '../hooks';
import { selectApiCategoriesFilter, selectCategoriesSort } from '../selectors';
import { updateKeyword } from '../slice';

const Categories = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectApiCategoriesFilter);
  const sort = useAppSelector(selectCategoriesSort);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { categories, isLoading, isRefetching, refetch } = useCategories({
    filter: debouncedFilter,
    sort,
  });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  return (
    <View style={[flex1, padding('top')('xs')]}>
      <CategoriesSearch
        style={margin('bottom')('s')}
        onKeywordChange={handleOnKeywordChange}
        keyword={filter?.keyword}
      />
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
