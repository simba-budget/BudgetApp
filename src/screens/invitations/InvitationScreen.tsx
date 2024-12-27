import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Invitation } from '@features/invitations/containers';
import { InvitationScreenProps } from '@navigation/types';
import React from 'react';

const InvitationScreen = ({ route }: InvitationScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Invitation id={route.params.id} />
  </ScreenContainer>
);

export default InvitationScreen;
