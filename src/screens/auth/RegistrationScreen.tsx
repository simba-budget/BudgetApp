import { FormScreenContainer, StatusBar } from '@common/components';
import { Registration } from '@features/auth/containers';
import React from 'react';

const RegistrationScreen = () => (
  <FormScreenContainer>
    <StatusBar translucent={false} />
    <Registration />
  </FormScreenContainer>
);

export default RegistrationScreen;
