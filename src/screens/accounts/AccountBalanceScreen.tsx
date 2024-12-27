import { ScreenContainer, StatusBar } from '@common/v2/components';
import { AccountBalance } from '@features/accounts/containers';
import { AccountBalanceScreenProps } from '@navigation/types';
import React from 'react';

const AccountBalanceScreen = ({ route }: AccountBalanceScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <AccountBalance data={route.params.data} />
  </ScreenContainer>
);

export default AccountBalanceScreen;
