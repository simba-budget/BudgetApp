import { Currency } from '@api/clients/currencies/types';
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
  currency: Currency,
): Section<Transaction>[] => {
  return map(
    groupBy(
      orderBy(transactions, 'date', 'desc'),
      (transaction) => transaction.date,
    ),
    (dateTransactions, date) => ({
      title: formatDate(date),
      subtitle: formatPrice(
        sumBy(dateTransactions, ({ baseAmount, amount }) => baseAmount || amount),
        currency,
      ),
      data: dateTransactions,
    }),
  );
};

export const mapSaveTransactionRequest = (
  transaction?: Transaction | null,
): Partial<SaveTransactionRequest> => ({
  description: transaction?.description ?? '',
  date: transaction?.date ?? getCurrentFormDate(),
  amount: transaction?.amount ?? 0,
  tagsIds: transaction?.tags?.map((tag) => tag.id) ?? null,
  ...(transaction?.currency && { currencyId: transaction.currency.id }),
  ...(transaction?.merchant && { merchantId: transaction.merchant.id }),
  ...(transaction?.category && { categoryId: transaction.category.id }),
  ...(transaction?.subscription && { subscriptionId: transaction.subscription.id }),
});
