import { ScreenContainer, StatusBar } from '@common/components';
import { Contributions } from '@features/contributions/containers';
import React from 'react';

const ContributionsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <Contributions />
  </ScreenContainer>
);

export default ContributionsScreen;
