import { BottomSheetScreenContainer } from '@common/components';
import { SubscriptionEdit } from '@features/subscriptions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type SubscriptionEditScreenProps = StaticScreenProps<{
  id: number;
}>;

const SubscriptionEditScreen = ({ route }: SubscriptionEditScreenProps) => (
  <BottomSheetScreenContainer>
    <SubscriptionEdit id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default SubscriptionEditScreen;
