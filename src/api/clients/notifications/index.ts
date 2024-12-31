import httpClient from '@api/httpClient';
import { ListResponse } from '@api/types';

import { ListNotificationsRequest, Notification } from './types';

const url = '/notifications';

export const getNotifications = (request: ListNotificationsRequest) => {
  const params = { ...request.filter, ...request.sort, ...request.paging };
  return httpClient.get<void, ListResponse<Notification>>(url, { params });
};
