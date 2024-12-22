import { TransactionsFilter as ApiTransactionsFilter } from '@api/clients/transactions/types';

export type TransactionOptionKey = 'edit' | 'delete' | 'view';

export type TransactionsFilter = Omit<ApiTransactionsFilter, 'accountId'>;
