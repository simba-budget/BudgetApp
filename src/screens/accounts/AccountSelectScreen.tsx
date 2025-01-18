import { BottomSheetScreenContainer } from '@common/components';
import { AccountSelect } from '@features/accounts/containers';
import React from 'react';

const AccountSelectScreen = () => (
  <BottomSheetScreenContainer>
    <AccountSelect />
  </BottomSheetScreenContainer>
);

export default AccountSelectScreen;
