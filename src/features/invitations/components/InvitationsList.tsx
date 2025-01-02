import { Invitation } from '@api/clients/invitations/types';
import { FlatList } from '@common/v2/components';
import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';

import InvitationsListItem from './InvitationsListItem';

export interface InvitationsListProps {
  style?: StyleProp<ViewStyle>;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  invitations: Invitation[];
  onInvitationPress: (invitation: Invitation) => void;
  isFetchingMore: boolean;
  onFetchMore: () => void;
}

const InvitationsList = ({
  onInvitationPress,
  invitations,
  isLoading,
  style,
  onRefresh,
  isRefreshing,
  onFetchMore,
  isFetchingMore,
}: InvitationsListProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Invitation>) => (
      <InvitationsListItem
        onPress={() => onInvitationPress(item)}
        invitation={item}
      />
    ),
    [onInvitationPress],
  );

  return (
    <FlatList
      keyExtractor={(invitation) => invitation.id.toString()}
      isSafeBottomArea
      onEndReached={onFetchMore}
      isFetchingMore={isFetchingMore}
      onRefresh={onRefresh}
      style={style}
      data={invitations}
      refreshing={isLoading || isRefreshing}
      renderItem={renderItem}
    />
  );
};

export default InvitationsList;
