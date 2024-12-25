import { ScreenContainer } from '@common/components';
import { Transaction } from '@features/transactions/containers';
import { TransactionScreenProps } from '@navigation/types';
import React from 'react';

const TransactionScreen = ({ route }: TransactionScreenProps) => (
  <ScreenContainer>
    <Transaction id={route.params.id} />
  </ScreenContainer>
);

export default TransactionScreen;
