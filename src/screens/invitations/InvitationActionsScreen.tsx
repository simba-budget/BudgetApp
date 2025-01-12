import { SheetScreenContainer } from '@common/components';
import { InvitationActions } from '@features/invitations/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type InvitationActionsScreenProps = StaticScreenProps<{ id: number }>;

const InvitationActionsScreen = ({ route }: InvitationActionsScreenProps) => (
  <SheetScreenContainer isBottomSafe>
    <InvitationActions id={route.params.id} />
  </SheetScreenContainer>
);

export default InvitationActionsScreen;
