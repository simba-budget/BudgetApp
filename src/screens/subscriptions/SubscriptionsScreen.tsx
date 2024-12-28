import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Subscriptions } from '@features/subscriptions/containers';
import React from 'react';

const SubscriptionsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Subscriptions />
  </ScreenContainer>
);

export default SubscriptionsScreen;
