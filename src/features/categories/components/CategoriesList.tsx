import { Category } from '@api/clients/categories/types';
import { gap, padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import CategoriesListItem from './CategoriesListItem';

export interface CategoriesListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  categories: Category[];
  onCategoryPress: (category: Category) => void;
}

const CategoriesList = ({
  onCategoryPress,
  categories,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
}: CategoriesListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Category>) => (
      <CategoriesListItem onPress={() => onCategoryPress(item)} category={item} />
    ),
    [onCategoryPress],
  );

  return (
    <FlatList
      contentContainerStyle={[padding('horizontal')('m'), gap('row')('s')]}
      onRefresh={onRefresh}
      style={style}
      data={categories}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default CategoriesList;
