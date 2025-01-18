import { BottomSheetScreenContainer } from '@common/components';
import { InvitationActions } from '@features/invitations/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type InvitationActionsScreenProps = StaticScreenProps<{ id: number }>;

const InvitationActionsScreen = ({ route }: InvitationActionsScreenProps) => (
  <BottomSheetScreenContainer>
    <InvitationActions id={route.params.id} />
  </BottomSheetScreenContainer>
);

export default InvitationActionsScreen;
