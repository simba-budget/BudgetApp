import { SaveAccountRequest } from '@api/clients/accounts/types';

export type NameFormData = Pick<SaveAccountRequest, 'name'>;
export type InitialBalanceFormData = Pick<SaveAccountRequest, 'initialBalance' | 'currency'>;
