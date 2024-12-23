import { ScreenContainer, StatusBar } from '@common/components';
import { Invitations } from '@features/invitations/containers';
import React from 'react';

const InvitationsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <Invitations />
  </ScreenContainer>
);

export default InvitationsScreen;
