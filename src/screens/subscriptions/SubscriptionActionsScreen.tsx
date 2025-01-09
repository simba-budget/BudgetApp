import { SheetScreenContainer } from '@common/v2/components';
import { SubscriptionActions } from '@features/subscriptions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type SubscriptionActionsScreenProps = StaticScreenProps<{ id: number }>;

const SubscriptionActionsScreen = ({ route }: SubscriptionActionsScreenProps) => (
  <SheetScreenContainer backgroundColor="primary">
    <SubscriptionActions id={route.params.id} />
  </SheetScreenContainer>
);

export default SubscriptionActionsScreen;
