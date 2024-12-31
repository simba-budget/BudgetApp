import { Notification } from '@api/clients/notifications/types';
import { ListItem, Section } from '@common/types';
import { formatRelevantDate } from '@utils/date';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';

import { notificationTypeIconMap } from './constants';

export const mapNotificationsToMonthsSections = (
  notifications: Notification[],
): Section<ListItem>[] => {
  return map(
    groupBy(
      orderBy(notifications, 'date', 'desc'),
      (notification) => notification.date,
    ),
    (notificationsForMonth, month) => ({
      title: month,
      data: notificationsForMonth.map(mapNotificationToListItem),
    }),
  );
};

export const mapNotificationToListItem = (notification: Notification): ListItem => ({
  id: notification.id,
  updatedAt: notification.updatedAt,
  createdAt: notification.createdAt,
  iconName: notificationTypeIconMap[notification.type],
  leftTitle: notification.title,
  leftSubtitle: notification.description,
  rightSubtitle: formatRelevantDate(notification.date),
  highlightColor: notification.isRead ? undefined : 'highlightPrimary',
});
