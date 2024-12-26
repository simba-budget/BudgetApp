import { ScreenContainer, StatusBar } from '@common/components';
import { Invitation } from '@features/invitations/containers';
import { InvitationScreenProps } from '@navigation/types';
import React from 'react';

const InvitationScreen = ({ route }: InvitationScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <Invitation id={route.params.id} />
  </ScreenContainer>
);

export default InvitationScreen;
