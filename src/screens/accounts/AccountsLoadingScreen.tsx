import { ScreenContainer, StatusBar } from '@common/v2/components';
import { AccountsLoading } from '@features/accounts/containers';
import React from 'react';

const AccountsLoadingScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <AccountsLoading />
  </ScreenContainer>
);

export default AccountsLoadingScreen;
