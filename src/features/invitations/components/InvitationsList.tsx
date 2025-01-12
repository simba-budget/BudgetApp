import { Invitation } from '@api/clients/invitations/types';
import { FlatList } from '@common/components';
import { useSafeBottomInset } from '@common/hooks';
import { padding } from '@styles/lightTheme';
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
  const paddingBottom = useSafeBottomInset();

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Invitation>) => (
      <InvitationsListItem invitation={item} />
    ),
    [],
  );

  return (
    <FlatList
      contentContainerStyle={[padding('top')('xxs'), { paddingBottom }]}
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
