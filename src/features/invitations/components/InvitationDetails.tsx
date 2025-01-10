import { Invitation } from '@api/clients/invitations/types';
import { Text } from '@common/components';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { RefreshControl, ScrollView, StyleProp, ViewStyle } from 'react-native';

export interface InvitationDetailsProps {
  style?: StyleProp<ViewStyle>;
  invitation: Invitation | null;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
}

const InvitationDetails = ({
  invitation,
  isLoading,
  onRefresh,
  isRefreshing,
  style,
}: InvitationDetailsProps) => (
  <ScrollView
    style={style}
    refreshControl={
      <RefreshControl onRefresh={onRefresh} refreshing={isLoading || isRefreshing} />
    }
    contentContainerStyle={padding('full')('m')}>
    <Text>{JSON.stringify(invitation, null, 2)}</Text>
  </ScrollView>
);

export default InvitationDetails;
