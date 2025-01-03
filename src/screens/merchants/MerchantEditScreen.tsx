import { ScreenContainer } from '@common/v2/components';
import { MerchantEdit } from '@features/merchants/containers';
import { MerchantEditScreenProps } from '@navigation/navigators/account';
import React from 'react';

const MerchantEditScreen = ({ route }: MerchantEditScreenProps) => (
  <ScreenContainer>
    <MerchantEdit id={route.params.id} />
  </ScreenContainer>
);

export default MerchantEditScreen;
