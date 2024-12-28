import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Subscription } from '@features/subscriptions/containers';
import { SubscriptionScreenProps } from '@navigation/types';
import React from 'react';

const SubscriptionScreen = ({ route }: SubscriptionScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Subscription id={route.params.id} />
  </ScreenContainer>
);

export default SubscriptionScreen;
