import { ScreenContainer, StatusBar } from '@common/components';
import { Registration } from '@features/auth/hoc';
import React from 'react';

const RegistrationScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <Registration />
  </ScreenContainer>
);

export default RegistrationScreen;
