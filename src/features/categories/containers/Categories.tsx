import { Category } from '@api/clients/categories/types';
import { debounceTime } from '@common/constants';
import { Button } from '@common/v2/components';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { toCategory, toCategoryAdd } from '@navigation/actions';
import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import { padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { CategoriesList, CategoriesSearch } from '../components';
import { useCategories } from '../hooks';
import { selectCategoriesFilter } from '../selectors';
import { updateKeyword } from '../slice';

const Categories = () => {
  const navigation = useNavigation<MainNavigation>();
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
    <SafeAreaView style={flex1}>
      <View style={padding('horizontal')('m')}>
        <Button onPress={() => toCategoryAdd(navigation)} title="Add" />
      </View>
      <CategoriesSearch onKeywordChange={handleOnKeywordChange} keyword={filter?.keyword} />
      <CategoriesList
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        categories={categories}
        onCategoryPress={handleOnCategoryPress}
      />
    </SafeAreaView>
  );
};

export default Categories;
