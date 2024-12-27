import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Transactions } from '@features/transactions/containers';
import React from 'react';

const TransactionsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Transactions />
  </ScreenContainer>
);

export default TransactionsScreen;
