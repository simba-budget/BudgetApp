import { Subscription } from '@features/subscriptions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

export type SubscriptionScreenProps = StaticScreenProps<{ id: number }>;

const SubscriptionScreen = ({ route }: SubscriptionScreenProps) => (
  <SheetScreenContainer>
    <Subscription id={route.params.id} />
  </SheetScreenContainer>
);

export default SubscriptionScreen;
