import {
  SaveTransactionRequest as ApiSaveTransactionId,
  TransactionsFilter as ApiTransactionsFilter,
} from '@api/clients/transactions/types';

export type TransactionsFilter = Omit<ApiTransactionsFilter, 'accountId'>;
export type SaveTransactionRequest = Omit<ApiSaveTransactionId, 'accountId'>;
