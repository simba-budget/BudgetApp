import { ScreenContainer, StatusBar } from '@common/v2/components';
import { InvitationAdd } from '@features/invitations/containers';
import React from 'react';

const InvitationAddScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <InvitationAdd />
  </ScreenContainer>
);

export default InvitationAddScreen;
