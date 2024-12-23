import { ScreenContainer, StatusBar } from '@common/components';
import { Accounts } from '@features/accounts/containers';
import React from 'react';

const AccountsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <Accounts />
  </ScreenContainer>
);

export default AccountsScreen;
