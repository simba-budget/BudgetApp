import { SheetScreenContainer } from '@common/v2/components';
import { InvitationAdd } from '@features/invitations/containers';
import React from 'react';

const InvitationAddScreen = () => (
  <SheetScreenContainer backgroundColor="secondary">
    <InvitationAdd />
  </SheetScreenContainer>
);

export default InvitationAddScreen;
