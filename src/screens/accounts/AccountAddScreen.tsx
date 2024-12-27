import { ScreenContainer, StatusBar } from '@common/v2/components';
import { AccountAdd } from '@features/accounts/containers';
import React from 'react';

const AccountAddScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <AccountAdd />
  </ScreenContainer>
);

export default AccountAddScreen;
