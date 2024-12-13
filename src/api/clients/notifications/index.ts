import httpClient from '@api/httpClient';
import { ListResponse } from '@api/types';

import { Notification } from './types';

const url = '/notifications';

export const getNotifications = () => {
  return httpClient.get<void, ListResponse<Notification>>(url);
};
