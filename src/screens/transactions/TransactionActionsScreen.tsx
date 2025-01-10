import { TransactionActions } from '@features/transactions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

export type TransactionActionsScreenProps = StaticScreenProps<{ id: number }>;

const TransactionActionsScreen = ({ route }: TransactionActionsScreenProps) => (
  <SheetScreenContainer backgroundColor="primary">
    <TransactionActions id={route.params.id} />
  </SheetScreenContainer>
);

export default TransactionActionsScreen;
