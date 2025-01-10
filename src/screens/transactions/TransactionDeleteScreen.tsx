import { TransactionDelete } from '@features/transactions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

export type TransactionDeleteScreenProps = StaticScreenProps<{ id: number }>;

const TransactionDeleteScreen = ({ route }: TransactionDeleteScreenProps) => (
  <SheetScreenContainer>
    <TransactionDelete id={route.params.id} />
  </SheetScreenContainer>
);

export default TransactionDeleteScreen;
