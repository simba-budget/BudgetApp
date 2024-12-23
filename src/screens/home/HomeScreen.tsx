import { ScreenContainer, StatusBar } from '@common/components';
import { Home } from '@features/home/containers';
import React from 'react';

const HomeScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <Home />
  </ScreenContainer>
);

export default HomeScreen;
