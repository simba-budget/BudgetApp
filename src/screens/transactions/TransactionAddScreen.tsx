import { ScreenContainer, StatusBar } from '@common/v2/components';
import { TransactionAdd } from '@features/transactions/containers';
import React from 'react';

const TransactionAddScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <TransactionAdd />
  </ScreenContainer>
);

export default TransactionAddScreen;
