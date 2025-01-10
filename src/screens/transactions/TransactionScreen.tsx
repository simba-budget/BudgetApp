import { Transaction } from '@features/transactions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

export type TransactionScreenProps = StaticScreenProps<{ id: number }>;

const TransactionScreen = ({ route }: TransactionScreenProps) => (
  <SheetScreenContainer>
    <Transaction id={route.params.id} />
  </SheetScreenContainer>
);

export default TransactionScreen;
