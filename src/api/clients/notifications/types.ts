import { BaseModel, ListRequest, Sort } from '@api/types';

export type NotificationType = 'CLIENTS' | 'EXPENSES' | 'INVOICES' | 'ACCOUNT';

export interface Notification extends BaseModel {
  title: string;
  description: string;
  type: NotificationType;
  data: Record<string, string>;
  isRead: boolean;
  date: string;
}

export interface NotificationsFilter {
  accountId: number;
  isRead?: boolean | null;
}

export type NotificationsSort = Sort<'date'>;
export type ListNotificationsRequest = ListRequest<
  NotificationsFilter,
  NotificationsSort
>;
