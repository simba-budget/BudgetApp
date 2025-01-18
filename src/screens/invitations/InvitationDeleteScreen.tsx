import { BottomSheetScreenContainer } from '@common/components';
import { InvitationDelete } from '@features/invitations/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type InvitationDeleteScreenProps = StaticScreenProps<{ id: number }>;

const InvitationDeleteScreen = ({ route }: InvitationDeleteScreenProps) => (
  <BottomSheetScreenContainer>
    <InvitationDelete id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default InvitationDeleteScreen;
