import {
  TransactionsFilter,
  TransactionsSort,
} from '@api/clients/transactions/types';
import { Paging } from '@api/types';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useTransactions } from '@features/transactions/hooks';

const sort: TransactionsSort = { column: 'date', direction: 'desc' };
const paging: Paging = { limit: 5, offset: 0 };

const useRecentIncomes = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const filter: TransactionsFilter = { accountId, amountFrom: 0.01 };
  return useTransactions({ filter, sort, paging });
};

export default useRecentIncomes;
