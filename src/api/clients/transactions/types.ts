import { BaseModel, ListRequest, ListResponse, Sort } from '@api/types';

import { Category } from '../categories/types';
import { Currency } from '../currencies/types';
import { ExternalAccount } from '../externalAccounts/types';
import { Member } from '../members/types';
import { Merchant } from '../merchants/types';
import { Subscription } from '../subscriptions/types';
import { Tag } from '../tags/types';

export interface Transaction extends BaseModel {
  date: string;
  description: string | null;
  amount: number;
  currency: Currency;
  baseAmount: number;
  baseCurrency: Currency;
  category: Category | null;
  subscription: Subscription | null;
  merchant: Merchant | null;
  externalAccount: ExternalAccount | null;
  tags: Tag[];
  createdBy: Member | null;
  updatedAt: string | null;
  createdAt: string | null;
}

export interface TransactionDateStats {
  date: string;
  amount: number;
}

export type TransactionsStatsResponse = ListResponse<TransactionDateStats>;

export interface SaveTransactionRequest {
  amount: number;
  currencyId: number;
  accountId: number;
  description: string | null;
  categoryId: number | null;
  subscriptionId: number | null;
  merchantId: number | null;
  tagsIds: number[] | null;
  date: string;
}

export interface TransactionsFilter {
  accountId: number;
  subscriptionId?: number | null;
  merchantId?: number | null;
  keyword?: string | null;
  categoriesIds?: number[] | null;
  tagsIds?: number[] | null;
  amountFrom?: number | null;
  amountTo?: number | null;
  dateFrom?: string | null;
  dateTo?: string | null;
}

export type TransactionsSort = Sort<'date'>;
export type ListTransactionsRequest = ListRequest<
  TransactionsFilter,
  TransactionsSort
>;
