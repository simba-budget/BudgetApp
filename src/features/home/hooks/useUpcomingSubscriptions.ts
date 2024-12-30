import { SubscriptionsFilter } from '@api/clients/subscriptions/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useSubscriptions } from '@features/subscriptions/hooks';

const paging: Paging = { limit: 1, offset: 0 };

const useUpcomingSubscriptions = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const filter: SubscriptionsFilter = { accountId };
  return useSubscriptions({ filter, paging });
};

export default useUpcomingSubscriptions;
