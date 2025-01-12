import { SheetScreenContainer } from '@common/components';
import { InvitationAdd } from '@features/invitations/containers';
import React from 'react';

const InvitationAddScreen = () => (
  <SheetScreenContainer isBottomSafe>
    <InvitationAdd />
  </SheetScreenContainer>
);

export default InvitationAddScreen;
