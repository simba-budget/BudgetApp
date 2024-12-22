import { BaseModel } from '@api/types';

import { Category } from '../categories/types';
import { Member } from '../members/types';

export interface Transaction extends BaseModel {
  amount: number;
  currency: string;
  description: string | null;
  category: Category;
  date: string;
  createdBy: Member;
}

export interface SaveTransactionRequest {
  amount: number;
  currency: string;
  description: string | null;
  categoryId: number;
  date: string;
}

export interface TransactionsFilter {
  accountId: number;
  keyword?: string | null;
  categoriesIds?: number[] | null;
  amountFrom?: number | null;
  amountTo?: number | null;
  dateFrom?: string | null;
  dateTo?: string | null;
}
