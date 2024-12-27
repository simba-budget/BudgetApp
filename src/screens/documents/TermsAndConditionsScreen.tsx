import { ScreenContainer, StatusBar } from '@common/v2/components';
import { TermsAndConditions } from '@features/documents/hoc';
import React from 'react';

const TermsAndConditionsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <TermsAndConditions />
  </ScreenContainer>
);

export default TermsAndConditionsScreen;
