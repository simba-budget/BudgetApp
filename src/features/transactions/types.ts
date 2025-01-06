import {
  TransactionsFilter as ApiTransactionsFilter,
  TransactionsStatsFilter as ApiTransactionsStatsFilter,
} from '@api/clients/transactions/types';

export type TransactionOptionKey = 'edit' | 'delete' | 'view';

export type TransactionsFilter = Omit<ApiTransactionsFilter, 'accountId'>;
export type TransactionsStatsFilter = Omit<ApiTransactionsStatsFilter, 'accountId'>;
