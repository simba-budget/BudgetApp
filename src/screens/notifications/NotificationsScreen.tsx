import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Notifications } from '@features/notifications/containers';
import React from 'react';

const NotificationsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Notifications />
  </ScreenContainer>
);

export default NotificationsScreen;
