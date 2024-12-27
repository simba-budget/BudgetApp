import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Registration } from '@features/auth/hoc';
import React from 'react';

const RegistrationScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Registration />
  </ScreenContainer>
);

export default RegistrationScreen;
