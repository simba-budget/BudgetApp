import { Invitation } from '@api/clients/invitations/types';
import { gap, padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import InvitationsListItem from './InvitationsListItem';

export interface InvitationsListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  invitations: Invitation[];
  onInvitationPress: (invitation: Invitation) => void;
}

const InvitationsList = ({
  onInvitationPress,
  invitations,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
}: InvitationsListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Invitation>) => (
      <InvitationsListItem onPress={() => onInvitationPress(item)} invitation={item} />
    ),
    [onInvitationPress],
  );

  return (
    <FlatList
      contentContainerStyle={[padding('horizontal')('m'), gap('row')('s')]}
      onRefresh={onRefresh}
      style={style}
      data={invitations}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default InvitationsList;
