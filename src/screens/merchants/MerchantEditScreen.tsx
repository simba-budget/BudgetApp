import { ScreenContainer } from '@common/v2/components';
import { MerchantEdit } from '@features/merchants/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type MerchantEditScreenProps = StaticScreenProps<{
  id: number;
}>;

const MerchantEditScreen = ({ route }: MerchantEditScreenProps) => (
  <ScreenContainer>
    <MerchantEdit id={route.params.id} />
  </ScreenContainer>
);

export default MerchantEditScreen;
