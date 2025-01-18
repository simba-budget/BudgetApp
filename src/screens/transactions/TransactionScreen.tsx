import { Transaction as TransactionType } from '@api/clients/transactions/types';
import { BottomSheetScreenContainer } from '@common/components';
import { Transaction } from '@features/transactions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TransactionScreenProps = StaticScreenProps<{
  id: number;
  transaction: TransactionType;
}>;

const TransactionScreen = ({ route }: TransactionScreenProps) => (
  <BottomSheetScreenContainer>
    <Transaction initialValue={route.params.transaction} id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default TransactionScreen;
