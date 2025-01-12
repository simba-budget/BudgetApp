import { SheetScreenContainer } from '@common/components';
import { SubscriptionAdd } from '@features/subscriptions/containers';
import React from 'react';

const SubscriptionAddScreen = () => (
  <SheetScreenContainer isBottomSafe>
    <SubscriptionAdd />
  </SheetScreenContainer>
);

export default SubscriptionAddScreen;
