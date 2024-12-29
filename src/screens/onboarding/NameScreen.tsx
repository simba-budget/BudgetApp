import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Name } from '@features/onboarding/containers';
import React from 'react';

const NameScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Name />
  </ScreenContainer>
);

export default NameScreen;
