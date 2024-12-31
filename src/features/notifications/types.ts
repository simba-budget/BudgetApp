import { NotificationsFilter as ApiNotificationsFilter } from '@api/clients/notifications/types';

export type NotificationsFilter = Omit<ApiNotificationsFilter, 'accountId'>;
