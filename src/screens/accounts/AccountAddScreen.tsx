import { BottomSheetScreenContainer } from '@common/components';
import { AccountAdd } from '@features/accounts/containers';
import React from 'react';

const AccountAddScreen = () => (
  <BottomSheetScreenContainer>
    <AccountAdd />
  </BottomSheetScreenContainer>
);

export default AccountAddScreen;
