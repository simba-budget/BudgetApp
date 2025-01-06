import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useTransactionsStats } from '@features/transactions/hooks';
import { formatWeekDay } from '@utils/date';
import { useMemo } from 'react';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';

const useWeekStatistic = () => {
  const accountId = useAppSelector(selectSelectedAccountIdStrict);

  const { stats } = useTransactionsStats({
    accountId,
    dateFrom: '2024-12-25',
    dateTo: '2024-12-31',
  });

  return useMemo<ChartData>(
    () => ({
      labels: stats.map(({ date }) => formatWeekDay(date)),
      datasets: [{ data: stats.map(({ amount }) => amount) }],
    }),
    [stats],
  );
};

export default useWeekStatistic;
