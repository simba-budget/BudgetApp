import { Transaction } from '@api/clients/transactions/types';
import { Section } from '@common/types';
import { formatDate, getCurrentFormDate } from '@utils/date';
import { formatPrice } from '@utils/price';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import sumBy from 'lodash/sumBy';

import { SaveTransactionRequest } from './types';

export const mapTransactionsToDaySections = (
  transactions: Transaction[],
): Section<Transaction>[] => {
  return map(
    groupBy(
      orderBy(transactions, 'date', 'desc'),
      (transaction) => transaction.date,
    ),
    (dateTransactions, date) => ({
      title: formatDate(date),
      subtitle: formatPrice(sumBy(dateTransactions, 'amount'), 'EUR'),
      data: dateTransactions,
    }),
  );
};

export const mapSaveTransactionRequest = (
  transaction?: Transaction | null,
): SaveTransactionRequest => ({
  description: transaction?.description ?? '',
  categoryId: transaction?.category?.id ?? 0,
  date: transaction?.date ?? getCurrentFormDate(),
  amount: transaction?.amount ?? 0,
  currency: transaction?.currency ?? 'EUR',
  subscriptionId: transaction?.subscription?.id ?? null,
  merchantId: transaction?.merchant?.id ?? null,
  tagsIds: transaction?.tags?.map((tag) => tag.id) ?? null,
});
