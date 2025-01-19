import { BottomSheetScreenContainer } from '@common/components';
import { TransactionAdd } from '@features/transactions/containers';
import React from 'react';

const TransactionAddScreen = () => (
  <BottomSheetScreenContainer>
    <TransactionAdd />
  </BottomSheetScreenContainer>
);

export default TransactionAddScreen;
