import { SaveAccountRequest } from '@api/clients/accounts/types';

export type AccountOptionKey = 'edit' | 'delete' | 'view';

export type AccountNameFormData = Pick<SaveAccountRequest, 'name'>;
export type AccountBalanceFormData = Pick<SaveAccountRequest, 'initialBalance' | 'currency'>;
