import { FormScreenContainer } from '@common/components';
import { TransactionEdit } from '@features/transactions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TransactionEditScreenProps = StaticScreenProps<{ id: number }>;

const TransactionEditScreen = ({ route }: TransactionEditScreenProps) => (
  <FormScreenContainer>
    <TransactionEdit id={route.params.id} />
  </FormScreenContainer>
);

export default TransactionEditScreen;
