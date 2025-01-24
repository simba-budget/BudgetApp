import { ScreenContainer, StatusBar } from '@common/components';
import { HomeShort } from '@features/home/containers';
import React from 'react';

const HomeScreen = () => (
  <ScreenContainer>
    <StatusBar translucent={false} />
    <HomeShort />
  </ScreenContainer>
);

export default HomeScreen;
