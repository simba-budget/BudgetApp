import { Tag } from '@api/clients/tags/types';
import { FlatList } from '@common/components';
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
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Tag>) => <TagsListItem tag={item} />,
    [],
  );

  return (
    <FlatList
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
