import { SubscriptionActions } from '@features/subscriptions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

export type SubscriptionActionsScreenProps = StaticScreenProps<{ id: number }>;

const SubscriptionActionsScreen = ({ route }: SubscriptionActionsScreenProps) => (
  <SheetScreenContainer backgroundColor="primary">
    <SubscriptionActions id={route.params.id} />
  </SheetScreenContainer>
);

export default SubscriptionActionsScreen;
