import { ContributionsFilter as ApiContributionsFilter } from '@api/clients/contributions/types';

export type ContributionsFilter = Omit<ApiContributionsFilter, 'accountId'>;
