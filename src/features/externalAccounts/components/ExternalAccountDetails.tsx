import { ExternalAccount } from '@api/clients/externalAccounts/types';
import { Text } from '@common/v2/components';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { RefreshControl, ScrollView, StyleProp, ViewStyle } from 'react-native';

export interface ExternalAccountDetailsProps {
  style?: StyleProp<ViewStyle>;
  externalAccount: ExternalAccount | null;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
}

const ExternalAccountDetails = ({
  externalAccount,
  isLoading,
  onRefresh,
  isRefreshing,
  style,
}: ExternalAccountDetailsProps) => {
  return (
    <ScrollView
      style={style}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={isLoading || isRefreshing}
        />
      }
      contentContainerStyle={padding('full')('m')}>
      <Text>{JSON.stringify(externalAccount, null, 2)}</Text>
    </ScrollView>
  );
};

export default ExternalAccountDetails;
