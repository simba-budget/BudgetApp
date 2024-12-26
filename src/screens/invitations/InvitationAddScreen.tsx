import { ScreenContainer, StatusBar } from '@common/components';
import { InvitationAdd } from '@features/invitations/containers';
import React from 'react';

const InvitationAddScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <InvitationAdd />
  </ScreenContainer>
);

export default InvitationAddScreen;
