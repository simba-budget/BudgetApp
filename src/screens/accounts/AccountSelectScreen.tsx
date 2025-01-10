import { SheetScreenContainer } from '@common/components';
import { AccountSelect } from '@features/accounts/containers';
import React from 'react';

const AccountSelectScreen = () => (
  <SheetScreenContainer backgroundColor="primary">
    <AccountSelect />
  </SheetScreenContainer>
);

export default AccountSelectScreen;
