import { Category } from '@api/clients/categories/types';
import { FlatList } from '@common/v2/components';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import CategoriesListItem from './CategoriesListItem';

export interface CategoriesListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  categories: Category[];
}

const CategoriesList = ({
  categories,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
}: CategoriesListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Category>) => (
      <CategoriesListItem category={item} />
    ),
    [],
  );

  return (
    <FlatList
      keyExtractor={(category) => category.id.toString()}
      isSafeBottomArea
      onRefresh={onRefresh}
      style={style}
      data={categories}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default CategoriesList;
