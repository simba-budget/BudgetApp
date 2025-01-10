import { ScreenContainer } from '@common/components';
import { Invitation } from '@features/invitations/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type InvitationScreenProps = StaticScreenProps<{ id: number }>;

const InvitationScreen = ({ route }: InvitationScreenProps) => (
  <ScreenContainer>
    <Invitation id={route.params.id} />
  </ScreenContainer>
);

export default InvitationScreen;
