import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Home } from '@features/home/containers';
import React from 'react';

const HomeScreen = () => (
  <ScreenContainer>
    <StatusBar barStyle="light-content" />
    <Home />
  </ScreenContainer>
);

export default HomeScreen;
