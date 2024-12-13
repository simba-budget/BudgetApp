import { ListItem, SectionList } from '@common/components';
import { ListItem as ListItemType, Section } from '@common/types';
import React, { FC, useMemo } from 'react';

import { useNotifications } from '../hooks';
import { mapNotificationsToMonthsSections } from '../map';

const NotificationsSections: FC = () => {
  const { notifications, isLoading } = useNotifications();

  const sections = useMemo<Section<ListItemType>[]>(
    () => mapNotificationsToMonthsSections(notifications),
    [notifications],
  );

  return <SectionList renderItem={ListItem} isLoading={isLoading} sections={sections} />;
};

export default NotificationsSections;
