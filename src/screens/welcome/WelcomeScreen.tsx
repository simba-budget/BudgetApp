import { ScreenContainer, StatusBar } from '@common/components';
import { Welcome } from '@features/welcome/components';
import React from 'react';

const WelcomeScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <Welcome />
  </ScreenContainer>
);

export default WelcomeScreen;
