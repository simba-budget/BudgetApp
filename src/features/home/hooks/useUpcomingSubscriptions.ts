import {
  SubscriptionsFilter,
  SubscriptionsSort,
} from '@api/clients/subscriptions/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useSubscriptions } from '@features/subscriptions/hooks';

const sort: SubscriptionsSort = { column: 'name', direction: 'asc' };
const paging: Paging = { limit: 1, offset: 0 };

const useUpcomingSubscriptions = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const filter: SubscriptionsFilter = { accountId };
  return useSubscriptions({ filter, sort, paging });
};

export default useUpcomingSubscriptions;
