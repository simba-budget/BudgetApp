import { ScreenContainer, StatusBar } from '@common/v2/components';
import { SubscriptionAdd } from '@features/subscriptions/containers';
import React from 'react';

const SubscriptionAddScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <SubscriptionAdd />
  </ScreenContainer>
);

export default SubscriptionAddScreen;
