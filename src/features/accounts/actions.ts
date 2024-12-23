import { Account } from '@api/clients/accounts/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { saveAccount } from './storage';

export const selectAccountAction = createAsyncThunk<Account, Account>(
  'selectAccount',
  async (account: Account) => {
    await saveAccount(account);
    return account;
  },
);
