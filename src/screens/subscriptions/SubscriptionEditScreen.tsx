import { ScreenContainer } from '@common/v2/components';
import { SubscriptionEdit } from '@features/subscriptions/containers';
import { SubscriptionEditScreenProps } from '@navigation/navigators/account';
import React from 'react';

const SubscriptionEditScreen = ({ route }: SubscriptionEditScreenProps) => (
  <ScreenContainer>
    <SubscriptionEdit id={route.params.id} />
  </ScreenContainer>
);

export default SubscriptionEditScreen;
