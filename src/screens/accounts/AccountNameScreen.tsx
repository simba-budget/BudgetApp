import { ScreenContainer, StatusBar } from '@common/v2/components';
import { AccountName } from '@features/accounts/containers';
import React from 'react';

const AccountNameScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <AccountName />
  </ScreenContainer>
);

export default AccountNameScreen;
