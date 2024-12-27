import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Welcome } from '@features/welcome/components';
import React from 'react';

const WelcomeScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Welcome />
  </ScreenContainer>
);

export default WelcomeScreen;
