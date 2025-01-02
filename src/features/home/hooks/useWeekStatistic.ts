import { BarChartItem } from '@common/v2/components/BarChart';
import { useMemo } from 'react';

const useWeekStatistic = () => {
  return useMemo<BarChartItem[]>(
    () => [
      {
        label: '2024-12-25',
        value: 85,
      },
      {
        label: '2024-12-26',
        value: 130,
      },
      {
        label: '2024-12-27',
        value: 700,
      },
      {
        label: '2024-12-28',
        value: 16,
      },
      {
        label: '2024-12-29',
        value: 335,
      },
      {
        label: '2024-12-30',
        value: 250,
      },
      {
        label: '2024-12-31',
        value: 440,
      },
      {
        label: '2025-01-01',
        value: 180,
      },
      {
        label: '2025-01-02',
        value: 280,
      },
    ],
    [],
  );
};

export default useWeekStatistic;
