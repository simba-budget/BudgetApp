import { BottomSheetScreenContainer } from '@common/components';
import { TransactionDelete } from '@features/transactions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TransactionDeleteScreenProps = StaticScreenProps<{ id: number }>;

const TransactionDeleteScreen = ({ route }: TransactionDeleteScreenProps) => (
  <BottomSheetScreenContainer>
    <TransactionDelete id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default TransactionDeleteScreen;
