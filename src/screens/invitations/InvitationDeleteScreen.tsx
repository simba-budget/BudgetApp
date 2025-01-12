import { SheetScreenContainer } from '@common/components';
import { InvitationDelete } from '@features/invitations/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type InvitationDeleteScreenProps = StaticScreenProps<{ id: number }>;

const InvitationDeleteScreen = ({ route }: InvitationDeleteScreenProps) => (
  <SheetScreenContainer isBottomSafe>
    <InvitationDelete id={route.params.id} />
  </SheetScreenContainer>
);

export default InvitationDeleteScreen;
