import { ScreenContainer, StatusBar } from '@common/components';
import { TermsAndConditions } from '@features/documents/hoc';
import React from 'react';

const TermsAndConditionsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <TermsAndConditions />
  </ScreenContainer>
);

export default TermsAndConditionsScreen;
