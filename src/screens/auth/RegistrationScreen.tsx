import { Registration } from '@features/auth/containers';
import React from 'react';
import { FormScreenContainer, StatusBar } from 'src/common/components';

const RegistrationScreen = () => (
  <FormScreenContainer>
    <StatusBar translucent={false} />
    <Registration />
  </FormScreenContainer>
);

export default RegistrationScreen;
