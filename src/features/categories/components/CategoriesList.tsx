import { Category } from '@api/clients/categories/types';
import { FlatList } from '@common/components';
import { padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import CategoriesListItem from './CategoriesListItem';

export interface CategoriesListProps {
  style?: StyleProp<ViewStyle>;
  isRefreshing: boolean;
  onRefresh: () => void;
  categories: Category[];
}

const CategoriesList = ({
  categories,
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
      contentContainerStyle={padding('top')('xxs')}
      keyExtractor={(category) => category.id.toString()}
      onRefresh={onRefresh}
      style={style}
      data={categories}
      refreshing={isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default CategoriesList;
