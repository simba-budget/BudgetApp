import { ScreenContainer } from '@common/v2/components';
import { SubscriptionEdit } from '@features/subscriptions/containers';
import { SubscriptionEditScreenProps } from '@navigation/types';
import React from 'react';

const SubscriptionEditScreen = ({ route }: SubscriptionEditScreenProps) => (
  <ScreenContainer>
    <SubscriptionEdit id={route.params.id} />
  </ScreenContainer>
);

export default SubscriptionEditScreen;
