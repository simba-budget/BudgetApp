import { BottomSheetScreenContainer } from '@common/components';
import { Subscription } from '@features/subscriptions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type SubscriptionScreenProps = StaticScreenProps<{ id: number }>;

const SubscriptionScreen = ({ route }: SubscriptionScreenProps) => (
  <BottomSheetScreenContainer>
    <Subscription id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default SubscriptionScreen;
