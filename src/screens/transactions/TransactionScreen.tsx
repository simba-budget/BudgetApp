import { SheetScreenContainer } from '@common/components';
import { Transaction } from '@features/transactions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TransactionScreenProps = StaticScreenProps<{ id: number }>;

const TransactionScreen = ({ route }: TransactionScreenProps) => (
  <SheetScreenContainer>
    <Transaction id={route.params.id} />
  </SheetScreenContainer>
);

export default TransactionScreen;
