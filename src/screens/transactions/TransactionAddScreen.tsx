import { SheetScreenContainer } from '@common/components';
import { TransactionAdd } from '@features/transactions/containers';
import React from 'react';

const TransactionAddScreen = () => (
  <SheetScreenContainer isBottomSafe>
    <TransactionAdd />
  </SheetScreenContainer>
);

export default TransactionAddScreen;
