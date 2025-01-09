import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useTransactionsStats } from '@features/transactions/hooks';
import dayjs from 'dayjs';
import sumBy from 'lodash/sumBy';
import { useMemo } from 'react';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';

import { mapTransactionsStats } from '../map';

const dateFrom = dayjs().subtract(7, 'days').format('YYYY-MM-DD');
const dateTo = dayjs().format('YYYY-MM-DD');
const amountTo = -0.01;

const useTransactionsWeekStats = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);

  const { stats, isLoading } = useTransactionsStats({
    accountId,
    dateFrom,
    dateTo,
    amountTo,
  });

  const data = useMemo<ChartData>(() => mapTransactionsStats(stats), [stats]);
  const totalAmount = useMemo<number>(() => sumBy(stats, 'amount'), [stats]);
  return { data, isLoading, totalAmount };
};

export default useTransactionsWeekStats;
