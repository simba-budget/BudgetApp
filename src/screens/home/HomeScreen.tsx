import { Home } from '@features/home/containers';
import React from 'react';
import { ScreenContainer, StatusBar } from 'src/common/components';

const HomeScreen = () => (
  <ScreenContainer>
    <StatusBar translucent={false} />
    <Home />
  </ScreenContainer>
);

export default HomeScreen;
