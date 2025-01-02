import { Tag } from '@api/clients/tags/types';
import { FlatList } from '@common/v2/components';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import TagsListItem from './TagsListItem';

export interface TagsListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  tags: Tag[];
  onTagPress: (tag: Tag) => void;
  isFetchingMore: boolean;
  onFetchMore: () => void;
}

const TagsList = ({
  onTagPress,
  tags,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
  isFetchingMore,
  onFetchMore,
}: TagsListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Tag>) => (
      <TagsListItem onPress={() => onTagPress(item)} tag={item} />
    ),
    [onTagPress],
  );

  return (
    <FlatList
      keyExtractor={(tag) => tag.id.toString()}
      onEndReached={onFetchMore}
      isFetchingMore={isFetchingMore}
      isSafeBottomArea
      onRefresh={onRefresh}
      style={style}
      data={tags}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default TagsList;
