import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Invitations } from '@features/invitations/containers';
import React from 'react';

const InvitationsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Invitations />
  </ScreenContainer>
);

export default InvitationsScreen;
