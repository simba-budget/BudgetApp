import { Member } from '@api/clients/members/types';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';
import { FlatList } from 'src/common/components';

import MembersListItem from './MembersListItem';

export interface MembersListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  members: Member[];
}

const MembersList = ({
  members,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
}: MembersListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Member>) => <MembersListItem member={item} />,
    [],
  );

  return (
    <FlatList
      keyExtractor={(member) => member.id.toString()}
      onRefresh={onRefresh}
      style={style}
      data={members}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default MembersList;
