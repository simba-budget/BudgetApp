import { SubscriptionEdit } from '@features/subscriptions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

export type SubscriptionEditScreenProps = StaticScreenProps<{
  id: number;
}>;

const SubscriptionEditScreen = ({ route }: SubscriptionEditScreenProps) => (
  <SheetScreenContainer>
    <SubscriptionEdit id={route.params.id} />
  </SheetScreenContainer>
);

export default SubscriptionEditScreen;
