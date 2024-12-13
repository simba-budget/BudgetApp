import { ScreenContainer, StatusBar } from '@common/components';
import { PrivacyPolicy } from '@features/documents/hoc';
import React from 'react';

const PrivacyPolicyScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="dark-content" />
    <PrivacyPolicy />
  </ScreenContainer>
);

export default PrivacyPolicyScreen;
