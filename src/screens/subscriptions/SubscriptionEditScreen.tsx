import { SheetScreenContainer } from '@common/components';
import { SubscriptionEdit } from '@features/subscriptions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type SubscriptionEditScreenProps = StaticScreenProps<{
  id: number;
}>;

const SubscriptionEditScreen = ({ route }: SubscriptionEditScreenProps) => (
  <SheetScreenContainer isBottomSafe>
    <SubscriptionEdit id={route.params.id} />
  </SheetScreenContainer>
);

export default SubscriptionEditScreen;
