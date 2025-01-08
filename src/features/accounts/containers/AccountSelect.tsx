import { Profile } from '@api/clients/profile/types';
import { useAppSelector } from '@core/store/store';
import { useProfile } from '@features/profile/hooks';
import React from 'react';

import { AccountDetails } from '../components';
import { selectSelectedAccountStrict } from '../selectors';

const AccountSelect = () => {
  const account = useAppSelector(selectSelectedAccountStrict);
  const { profile } = useProfile();

  return (
    <AccountDetails
      onAccountEditPress={console.log}
      profile={profile as Profile}
      account={account}
    />
  );
};

export default AccountSelect;
