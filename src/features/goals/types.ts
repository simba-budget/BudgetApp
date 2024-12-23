import { GoalsFilter as ApiGoalsFilter } from '@api/clients/goals/types';

export type GoalsFilter = Omit<ApiGoalsFilter, 'accountId'>;
