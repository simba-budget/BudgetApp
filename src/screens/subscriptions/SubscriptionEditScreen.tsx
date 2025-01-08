import { ScreenContainer } from '@common/v2/components';
import { SubscriptionEdit } from '@features/subscriptions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type SubscriptionEditScreenProps = StaticScreenProps<{
  id: number;
}>;

const SubscriptionEditScreen = ({ route }: SubscriptionEditScreenProps) => (
  <ScreenContainer>
    <SubscriptionEdit id={route.params.id} />
  </ScreenContainer>
);

export default SubscriptionEditScreen;
