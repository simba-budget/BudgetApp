import { ScreenContainer, StatusBar } from '@common/v2/components';
import { PrivacyPolicy } from '@features/documents/hoc';
import React from 'react';

const PrivacyPolicyScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <PrivacyPolicy />
  </ScreenContainer>
);

export default PrivacyPolicyScreen;
