import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Members } from '@features/members/containers';
import React from 'react';

const MembersScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Members />
  </ScreenContainer>
);

export default MembersScreen;
