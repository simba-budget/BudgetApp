import { AccountNavigation, toTagEdit } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { TagDetails } from '../components';
import { useTag } from '../hooks';

export interface TagProps {
  id: number;
}

const Tag = ({ id }: TagProps) => {
  const navigation = useNavigation<AccountNavigation>();
  const { tag, refetch, isRefetching, isLoading } = useTag(id);
  const handleOnEditPress = useCallback(
    () => toTagEdit(navigation, { id }),
    [navigation, id],
  );

  return (
    <TagDetails
      tag={tag}
      isLoading={isLoading}
      isRefreshing={isRefetching}
      onRefresh={refetch}
      onEditPress={handleOnEditPress}
    />
  );
};

export default Tag;
