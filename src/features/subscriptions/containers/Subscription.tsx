import { RootNavigation, toSubscriptionEdit } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { SubscriptionDetails } from '../components';
import { useSubscription } from '../hooks';

export interface SubscriptionProps {
  id: number;
}

const Subscription = ({ id }: SubscriptionProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { subscription, refetch, isRefetching, isLoading } = useSubscription(id);

  const handleOnEditPress = useCallback(
    () => toSubscriptionEdit(navigation, { id }),
    [navigation, id],
  );

  return (
    <SubscriptionDetails
      subscription={subscription}
      isLoading={isLoading}
      isRefreshing={isRefetching}
      onRefresh={refetch}
      onEditPress={handleOnEditPress}
    />
  );
};

export default Subscription;
