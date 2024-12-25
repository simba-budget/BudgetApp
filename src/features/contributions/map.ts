import { Contribution } from '@api/clients/contributions/types';
import { getCurrentDate } from '@utils/date';

import { SaveContributionRequest } from './types';

export const mapSaveContributionRequest = (
  contribution?: Contribution | null,
): SaveContributionRequest => ({
  description: contribution?.description ?? null,
  currency: contribution?.currency ?? 'EUR',
  amount: contribution?.amount ?? 0,
  date: contribution?.date ?? getCurrentDate(),
});
