import { ScreenContainer, StatusBar } from '@common/v2/components';
import { MerchantAdd } from '@features/merchants/containers';
import React from 'react';

const MerchantAddScreen = () => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <MerchantAdd />
  </ScreenContainer>
);

export default MerchantAddScreen;
