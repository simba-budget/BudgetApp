import { useMemo } from 'react';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';

const useWeekStatistic = () => {
  return useMemo<ChartData>(
    () => ({
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'],
      datasets: [
        {
          data: [800, 9543, 535, 5435, 3454, 435, 1000, 888],
        },
      ],
    }),
    [],
  );
};

export default useWeekStatistic;
