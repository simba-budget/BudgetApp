import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Profile } from '@features/profile/containers';
import React from 'react';

const ProfileScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Profile />
  </ScreenContainer>
);

export default ProfileScreen;
