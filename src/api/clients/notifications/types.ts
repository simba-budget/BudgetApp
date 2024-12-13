import { BaseModel } from '@api/types';

export type NotificationType = 'CLIENTS' | 'EXPENSES' | 'INVOICES' | 'ACCOUNT';

export interface Notification extends BaseModel {
  title: string;
  description: string;
  type: NotificationType;
  data: Record<string, string>;
  isRead: boolean;
  date: string;
}
