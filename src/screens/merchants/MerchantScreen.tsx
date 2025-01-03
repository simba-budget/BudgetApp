import { ScreenContainer, StatusBar } from '@common/v2/components';
import { Merchant } from '@features/merchants/containers';
import { MerchantScreenProps } from '@navigation/navigators/account';
import React from 'react';

const MerchantScreen = ({ route }: MerchantScreenProps) => (
  <ScreenContainer>
    <StatusBar translucent barStyle="light-content" />
    <Merchant id={route.params.id} />
  </ScreenContainer>
);

export default MerchantScreen;
