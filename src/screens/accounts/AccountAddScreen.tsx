import { ScreenContainer, StatusBar } from '@common/components';
import { AccountAdd } from '@features/accounts/containers';
import React from 'react';

const AccountAddScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <AccountAdd />
  </ScreenContainer>
);

export default AccountAddScreen;
