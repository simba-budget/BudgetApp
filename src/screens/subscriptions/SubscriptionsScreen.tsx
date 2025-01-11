import { FormScreenContainer } from '@common/components';
import { Subscriptions } from '@features/subscriptions/containers';
import React from 'react';

const SubscriptionsScreen = () => (
  <FormScreenContainer additionalPadding={0} isTabsScreen>
    <Subscriptions />
  </FormScreenContainer>
);

export default SubscriptionsScreen;
