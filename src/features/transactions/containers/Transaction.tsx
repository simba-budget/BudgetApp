import React from 'react';

import { TransactionDetails } from '../components';
import { useTransaction } from '../hooks';

export interface TransactionProps {
  id: number;
}

const Transaction = ({ id }: TransactionProps) => {
  const { transaction } = useTransaction(id);

  if (!transaction) return null;

  return <TransactionDetails transaction={transaction} />;
};

export default Transaction;
