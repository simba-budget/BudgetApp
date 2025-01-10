import { SubscriptionDelete } from '@features/subscriptions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

export type SubscriptionDeleteScreenProps = StaticScreenProps<{ id: number }>;

const SubscriptionDeleteScreen = ({ route }: SubscriptionDeleteScreenProps) => (
  <SheetScreenContainer>
    <SubscriptionDelete id={route.params.id} />
  </SheetScreenContainer>
);

export default SubscriptionDeleteScreen;
