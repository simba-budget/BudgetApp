import { TransactionAdd } from '@features/transactions/containers';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

const TransactionAddScreen = () => (
  <SheetScreenContainer>
    <TransactionAdd />
  </SheetScreenContainer>
);

export default TransactionAddScreen;
