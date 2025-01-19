import { Goal } from '@api/clients/goals/types';
import { getCurrentDate } from '@utils/date';

import { SaveGoalRequest } from './types';

export const mapSaveGoalRequest = (
  goal?: Goal | null,
): Partial<SaveGoalRequest> => ({
  name: goal?.name ?? '',
  description: goal?.description ?? null,
  initialAmount: goal?.initialAmount ?? 0,
  targetAmount: goal?.targetAmount ?? 0,
  endAt: goal?.endAt ?? null,
  startedAt: goal?.startedAt ?? getCurrentDate(),
  ...(goal?.currency && { currencyId: goal.currency.id }),
});
