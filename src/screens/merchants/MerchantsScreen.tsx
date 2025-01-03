import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Merchants } from '@features/merchants/containers';
import React from 'react';

const MerchantsScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Merchants />
  </ScreenContainer>
);

export default MerchantsScreen;
