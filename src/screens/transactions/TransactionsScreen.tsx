import { ScreenContainer, StatusBar } from '@common/components';
import { Transactions } from '@features/transactions/containers';
import React from 'react';

const TransactionsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <Transactions />
  </ScreenContainer>
);

export default TransactionsScreen;
