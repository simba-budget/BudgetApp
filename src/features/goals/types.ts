import {
  GoalsFilter as ApiGoalsFilter,
  SaveGoalRequest as ApiSaveGoalRequest,
} from '@api/clients/goals/types';

export type GoalsFilter = Omit<ApiGoalsFilter, 'accountId'>;
export type SaveGoalRequest = Omit<ApiSaveGoalRequest, 'accountId'>;
