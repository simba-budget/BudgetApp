import { ScreenContainer, StatusBar } from '@common/v2/components';
import { ExternalAccounts } from '@features/externalAccounts/containers';
import React from 'react';

const ExternalAccountsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <ExternalAccounts />
  </ScreenContainer>
);

export default ExternalAccountsScreen;
