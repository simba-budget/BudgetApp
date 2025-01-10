import { SheetScreenContainer } from '@common/components';
import { TransactionActions } from '@features/transactions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TransactionActionsScreenProps = StaticScreenProps<{ id: number }>;

const TransactionActionsScreen = ({ route }: TransactionActionsScreenProps) => (
  <SheetScreenContainer backgroundColor="primary">
    <TransactionActions id={route.params.id} />
  </SheetScreenContainer>
);

export default TransactionActionsScreen;
