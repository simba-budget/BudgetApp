import { IconName } from '@icons';

export interface QuickActionItem {
  title: string;
  iconName: IconName;
  onPress: () => void;
}

export interface DayStatistic {
  date: string;
  incomes: number;
  expenses: number;
  currency: string;
}
