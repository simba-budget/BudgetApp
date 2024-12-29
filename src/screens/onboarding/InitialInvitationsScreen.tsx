import { ScreenContainer, StatusBar } from '@common/v2/components';
import { InitialInvitations } from '@features/onboarding/containers';
import React from 'react';

const InitialInvitationsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <InitialInvitations />
  </ScreenContainer>
);

export default InitialInvitationsScreen;
