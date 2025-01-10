import { createAsyncThunk } from '@reduxjs/toolkit';

import { saveSelectedAccountId } from './storage';

export const selectAccountIdAction = createAsyncThunk<number, number>(
  'selectAccountId',
  async (id: number) => {
    await saveSelectedAccountId(id);
    return id;
  },
);
