import { ScreenContainer } from '@common/components';
import { Transactions } from '@features/transactions/containers';
import React from 'react';

const TransactionsScreen = () => (
  <ScreenContainer>
    <Transactions />
  </ScreenContainer>
);

export default TransactionsScreen;
