import { ScreenContainer, StatusBar } from '@common/components';
import { TransactionAdd } from '@features/transactions/containers';
import React from 'react';

const TransactionAddScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <TransactionAdd />
  </ScreenContainer>
);

export default TransactionAddScreen;
