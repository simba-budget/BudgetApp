import { BottomSheetScreenContainer } from '@common/components';
import { TransactionEdit } from '@features/transactions/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type TransactionEditScreenProps = StaticScreenProps<{ id: number }>;

const TransactionEditScreen = ({ route }: TransactionEditScreenProps) => (
  <BottomSheetScreenContainer>
    <TransactionEdit id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default TransactionEditScreen;
