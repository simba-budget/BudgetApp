import { Tag } from '@api/clients/tags/types';
import { FlatList } from '@common/components';
import { useSafeBottomInset } from '@common/hooks';
import { padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import TagsListItem from './TagsListItem';

export interface TagsListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  tags: Tag[];
}

const TagsList = ({
  tags,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
}: TagsListProps) => {
  const paddingBottom = useSafeBottomInset();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Tag>) => <TagsListItem tag={item} />,
    [],
  );

  return (
    <FlatList
      contentContainerStyle={[padding('top')('xxs'), { paddingBottom }]}
      keyExtractor={(tag) => tag.id.toString()}
      onRefresh={onRefresh}
      style={style}
      data={tags}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default TagsList;
