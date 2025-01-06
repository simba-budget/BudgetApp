import { TransactionDateStats } from '@api/clients/transactions/types';
import { formatWeekDay } from '@utils/date';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';

export const mapTransactionsStats = (stats: TransactionDateStats[]): ChartData => ({
  labels: stats.map(({ date }) => formatWeekDay(date)),
  datasets: [{ data: stats.map(({ amount }) => amount * -1) }],
});
