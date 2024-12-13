import { ScreenContainer, StatusBar } from '@common/components';
import { Notifications } from '@features/notifications/hoc';
import React from 'react';

const NotificationsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <Notifications />
  </ScreenContainer>
);

export default NotificationsScreen;
