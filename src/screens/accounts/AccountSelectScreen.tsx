import { SheetScreenContainer } from '@common/components';
import { AccountSelect } from '@features/accounts/containers';
import React from 'react';

const AccountSelectScreen = () => (
  <SheetScreenContainer isBottomSafe>
    <AccountSelect />
  </SheetScreenContainer>
);

export default AccountSelectScreen;
