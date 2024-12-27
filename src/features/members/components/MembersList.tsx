import { Member } from '@api/clients/members/types';
import { gap, padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import MembersListItem from './MembersListItem';

export interface MembersListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  members: Member[];
  onMemberPress: (member: Member) => void;
}

const MembersList = ({
  onMemberPress,
  members,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
}: MembersListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Member>) => (
      <MembersListItem onPress={() => onMemberPress(item)} member={item} />
    ),
    [onMemberPress],
  );

  return (
    <FlatList
      contentContainerStyle={[padding('horizontal')('m'), gap('row')('s')]}
      onRefresh={onRefresh}
      style={style}
      data={members}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default MembersList;
