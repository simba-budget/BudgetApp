import { ScreenContainer } from '@common/v2/components';
import { AccountEdit } from '@features/accounts/containers';
import { AccountEditScreenProps } from '@navigation/types';
import React from 'react';

const AccountEditScreen = ({ route }: AccountEditScreenProps) => (
  <ScreenContainer>
    <AccountEdit id={route.params.id} />
  </ScreenContainer>
);

export default AccountEditScreen;
