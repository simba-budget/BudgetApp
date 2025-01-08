import { ScreenContainer } from '@common/v2/components';
import { Merchant } from '@features/merchants/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type MerchantScreenProps = StaticScreenProps<{
  id: number;
}>;

const MerchantScreen = ({ route }: MerchantScreenProps) => (
  <ScreenContainer>
    <Merchant id={route.params.id} />
  </ScreenContainer>
);

export default MerchantScreen;
