import { BaseModel, ListRequest, Sort } from '@api/types';

import { Category } from '../categories/types';
import { Member } from '../members/types';
import { Merchant } from '../merchants/types';
import { Subscription } from '../subscriptions/types';
import { Tag } from '../tags/types';

export interface Transaction extends BaseModel {
  amount: number;
  currency: string;
  description: string | null;
  category: Category;
  subscription: Subscription | null;
  merchant: Merchant | null;
  tags: Tag[];
  date: string;
  createdBy: Member;
}

export interface SaveTransactionRequest {
  amount: number;
  currency: string;
  description: string | null;
  categoryId: number;
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
