import { RootNavigation, tagEditRoute } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { TagDetails } from '../components';
import { useTag } from '../hooks';

export interface TagProps {
  id: number;
}

const Tag = ({ id }: TagProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { tag, refetch, isRefetching, isLoading } = useTag(id);

  return (
    <TagDetails
      tag={tag}
      isLoading={isLoading}
      isRefreshing={isRefetching}
      onRefresh={refetch}
      onEditPress={() => navigation.push(tagEditRoute, { id })}
    />
  );
};

export default Tag;
