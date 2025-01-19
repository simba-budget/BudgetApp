import { Contribution } from '@api/clients/contributions/types';
import { getCurrentDate } from '@utils/date';

import { SaveContributionRequest } from './types';

export const mapSaveContributionRequest = (
  contribution?: Contribution | null,
): Partial<SaveContributionRequest> => ({
  description: contribution?.description ?? null,
  amount: contribution?.amount ?? 0,
  date: contribution?.date ?? getCurrentDate(),
  ...(contribution?.currency && { currencyId: contribution.currency.id }),
});
