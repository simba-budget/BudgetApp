import { AccountsLoading } from '@features/accounts/containers';
import React from 'react';
import { ScreenContainer } from 'src/common/components';

const AccountsLoadingScreen = () => (
  <ScreenContainer>
    <AccountsLoading />
  </ScreenContainer>
);

export default AccountsLoadingScreen;
