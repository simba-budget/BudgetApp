import {
  ContributionsFilter as ApiContributionsFilter,
  SaveContributionRequest as ApiSaveContributionRequest,
} from '@api/clients/contributions/types';

export type ContributionsFilter = Omit<
  ApiContributionsFilter,
  'accountId' | 'goalId'
>;
export type SaveContributionRequest = Omit<ApiSaveContributionRequest, 'goalId'>;
