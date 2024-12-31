import { Subscription } from '@api/clients/subscriptions/types';
import { Button } from '@common/v2/components';
import { Text } from '@common/v2/components';
import { useSubscriptionsTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { RefreshControl, ScrollView, StyleProp, ViewStyle } from 'react-native';

export interface SubscriptionDetailsProps {
  style?: StyleProp<ViewStyle>;
  subscription: Subscription | null;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  onEditPress: () => void;
}

const SubscriptionDetails = ({
  subscription,
  isLoading,
  onRefresh,
  isRefreshing,
  style,
  onEditPress,
}: SubscriptionDetailsProps) => {
  const { t } = useSubscriptionsTranslations();

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
      <Text>{JSON.stringify(subscription, null, 2)}</Text>
      <Button style={margin('top')('m')} onPress={onEditPress} title={t('Edit')} />
    </ScrollView>
  );
};

export default SubscriptionDetails;
