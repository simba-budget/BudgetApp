import { TransactionEdit } from '@features/transactions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

export type TransactionEditScreenProps = StaticScreenProps<{ id: number }>;

const TransactionEditScreen = ({ route }: TransactionEditScreenProps) => (
  <SheetScreenContainer>
    <TransactionEdit id={route.params.id} />
  </SheetScreenContainer>
);

export default TransactionEditScreen;
