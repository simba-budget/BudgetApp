import { Member } from '@api/clients/members/types';
import { FlatList } from '@common/components';
import { padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import MembersListItem from './MembersListItem';

export interface MembersListProps {
  style?: StyleProp<ViewStyle>;
  isRefreshing: boolean;
  onRefresh: () => void;
  members: Member[];
}

const MembersList = ({
  members,
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
      contentContainerStyle={padding('top')('xxs')}
      keyExtractor={(member) => member.id.toString()}
      onRefresh={onRefresh}
      style={style}
      data={members}
      refreshing={isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default MembersList;
