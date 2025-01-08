import { ScreenContainer } from '@common/v2/components';
import { TransactionEdit } from '@features/transactions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TransactionEditScreenProps = StaticScreenProps<{ id: number }>;

const TransactionEditScreen = ({ route }: TransactionEditScreenProps) => (
  <ScreenContainer>
    <TransactionEdit id={route.params.id} />
  </ScreenContainer>
);

export default TransactionEditScreen;
