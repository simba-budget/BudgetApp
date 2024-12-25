import { ScreenContainer } from '@common/components';
import { TransactionEdit } from '@features/transactions/containers';
import { TransactionEditScreenProps } from '@navigation/types';
import React from 'react';

const TransactionEditScreen = ({ route }: TransactionEditScreenProps) => (
  <ScreenContainer>
    <TransactionEdit id={route.params.id} />
  </ScreenContainer>
);

export default TransactionEditScreen;
