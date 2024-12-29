import { ScreenContainer, StatusBar } from '@common/v2/components';
import { InitialBalance } from '@features/onboarding/containers';
import React from 'react';

const InitialBalanceScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <InitialBalance />
  </ScreenContainer>
);

export default InitialBalanceScreen;
