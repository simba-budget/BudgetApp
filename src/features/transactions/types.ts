import { TransactionsFilter as ApiTransactionsFilter } from '@api/clients/transactions/types';

export type TransactionsFilter = Omit<ApiTransactionsFilter, 'accountId'>;
