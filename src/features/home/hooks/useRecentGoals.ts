import { GoalsFilter } from '@api/clients/goals/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useGoals } from '@features/goals/hooks';

const paging: Paging = { limit: 3, offset: 0 };

const useRecentGoals = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const filter: GoalsFilter = { accountId };
  return useGoals({ filter, paging });
};

export default useRecentGoals;
