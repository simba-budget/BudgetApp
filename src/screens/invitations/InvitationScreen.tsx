import { BottomSheetScreenContainer } from '@common/components';
import { Invitation } from '@features/invitations/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type InvitationScreenProps = StaticScreenProps<{ id: number }>;

const InvitationScreen = ({ route }: InvitationScreenProps) => (
  <BottomSheetScreenContainer>
    <Invitation id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default InvitationScreen;
