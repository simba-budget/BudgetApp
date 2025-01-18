import { Transaction as TransactionType } from '@api/clients/transactions/types';
import React from 'react';

import { TransactionDetails } from '../components';
import { useTransaction } from '../hooks';

export interface TransactionProps {
  id: number;
  initialValue: TransactionType;
}

const Transaction = ({ id, initialValue }: TransactionProps) => {
  const { transaction } = useTransaction(id);
  return <TransactionDetails transaction={transaction || initialValue} />;
};

export default Transaction;
