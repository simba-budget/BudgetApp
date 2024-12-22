import { ScreenContainer, StatusBar } from '@common/components';
import { Home } from '@features/home/containers';
import React from 'react';

const HomeScreen = () => (
  <ScreenContainer isDark>
    <StatusBar translucent barStyle="light-content" />
    <Home />
  </ScreenContainer>
);

export default HomeScreen;
