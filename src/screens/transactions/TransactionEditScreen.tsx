import { ScreenContainer } from '@common/v2/components';
import { TransactionEdit } from '@features/transactions/containers';
import { TransactionEditScreenProps } from '@navigation/types';
import React from 'react';

const TransactionEditScreen = ({ route }: TransactionEditScreenProps) => (
  <ScreenContainer>
    <TransactionEdit id={route.params.id} />
  </ScreenContainer>
);

export default TransactionEditScreen;
