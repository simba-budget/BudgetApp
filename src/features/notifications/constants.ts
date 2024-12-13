import { NotificationType } from '@api/clients/notifications/types';
import { IconName } from '@icons';

export const notificationTypeIconMap: Record<NotificationType, IconName> = {
  EXPENSES: 'card',
  INVOICES: 'document',
  ACCOUNT: 'profile',
  CLIENTS: 'users',
};
