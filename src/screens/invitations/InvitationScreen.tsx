import { Invitation } from '@features/invitations/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';
import { ScreenContainer } from 'src/common/components';

export type InvitationScreenProps = StaticScreenProps<{ id: number }>;

const InvitationScreen = ({ route }: InvitationScreenProps) => (
  <ScreenContainer>
    <Invitation id={route.params.id} />
  </ScreenContainer>
);

export default InvitationScreen;
