import { ScreenContainer, StatusBar } from '@common/components';
import { Profile } from '@features/profile/containers';
import React from 'react';

const ProfileScreen = () => (
  <ScreenContainer>
    <StatusBar translucent={false} />
    <Profile />
  </ScreenContainer>
);

export default ProfileScreen;
