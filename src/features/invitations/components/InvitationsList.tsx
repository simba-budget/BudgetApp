import { Invitation } from '@api/clients/invitations/types';
import { FlatList } from '@common/components';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import InvitationsListItem from './InvitationsListItem';

export interface InvitationsListProps {
  style?: StyleProp<ViewStyle>;
  isRefreshing: boolean;
  onRefresh: () => void;
  invitations: Invitation[];
}

const InvitationsList = ({
  invitations,
  style,
  onRefresh,
  isRefreshing,
}: InvitationsListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Invitation>) => (
      <InvitationsListItem invitation={item} />
    ),
    [],
  );

  return (
    <FlatList
      keyExtractor={(invitation) => invitation.id.toString()}
      onRefresh={onRefresh}
      style={style}
      data={invitations}
      refreshing={isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default InvitationsList;
