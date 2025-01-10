import { AccountSelect } from '@features/accounts/containers';
import React from 'react';
import { SheetScreenContainer } from 'src/common/components';

const AccountSelectScreen = () => (
  <SheetScreenContainer backgroundColor="primary">
    <AccountSelect />
  </SheetScreenContainer>
);

export default AccountSelectScreen;
