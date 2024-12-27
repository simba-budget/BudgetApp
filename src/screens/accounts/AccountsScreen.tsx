import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Accounts } from '@features/accounts/containers';
import React from 'react';

const AccountsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Accounts />
  </ScreenContainer>
);

export default AccountsScreen;
