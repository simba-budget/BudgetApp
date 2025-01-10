import { Transactions } from '@features/transactions/containers';
import React from 'react';
import { ScreenContainer } from 'src/common/components';

const TransactionsScreen = () => (
  <ScreenContainer>
    <Transactions />
  </ScreenContainer>
);

export default TransactionsScreen;
