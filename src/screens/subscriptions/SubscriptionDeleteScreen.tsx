import { SheetScreenContainer } from '@common/components';
import { SubscriptionDelete } from '@features/subscriptions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type SubscriptionDeleteScreenProps = StaticScreenProps<{ id: number }>;

const SubscriptionDeleteScreen = ({ route }: SubscriptionDeleteScreenProps) => (
  <SheetScreenContainer isBottomSafe>
    <SubscriptionDelete id={route.params.id} />
  </SheetScreenContainer>
);

export default SubscriptionDeleteScreen;
