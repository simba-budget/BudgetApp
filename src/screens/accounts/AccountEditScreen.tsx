import { ScreenContainer } from '@common/components';
import { AccountEdit } from '@features/accounts/containers';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type AccountEditScreenProps = StaticScreenProps<{
  id: number;
}>;

const AccountEditScreen = ({ route }: AccountEditScreenProps) => (
  <ScreenContainer>
    <AccountEdit id={route.params.id} />
  </ScreenContainer>
);

export default AccountEditScreen;
