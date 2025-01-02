import { Member } from '@api/clients/members/types';
import { FlatList } from '@common/v2/components';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import MembersListItem from './MembersListItem';

export interface MembersListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  members: Member[];
  onMemberPress: (member: Member) => void;
  isFetchingMore: boolean;
  onFetchMore: () => void;
}

const MembersList = ({
  onMemberPress,
  members,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
  onFetchMore,
  isFetchingMore,
}: MembersListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Member>) => (
      <MembersListItem onPress={() => onMemberPress(item)} member={item} />
    ),
    [onMemberPress],
  );

  return (
    <FlatList
      keyExtractor={(member) => member.id.toString()}
      isSafeBottomArea
      onEndReached={onFetchMore}
      isFetchingMore={isFetchingMore}
      onRefresh={onRefresh}
      style={style}
      data={members}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default MembersList;
