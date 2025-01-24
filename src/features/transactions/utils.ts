import { Transaction } from '@api/clients/transactions/types';
import { formatPrice } from '@utils/price';

export const getTransactionAmount = (transaction: Transaction) => {
  return transaction.baseAmount || transaction.amount;
};

export const formatTransactionAmount = (transaction: Transaction) => {
  return formatPrice(getTransactionAmount(transaction), transaction.baseCurrency);
};
