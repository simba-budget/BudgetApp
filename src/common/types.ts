import { BaseModel } from '@api/types';
import { IconName } from '@icons';
import { ThemeTextColors } from '@styles/types';

export type RelevantDate =
  | 'today'
  | 'yesterday'
  | 'thisWeek'
  | 'thisMonth'
  | 'lastMonth'
  | 'thisYear'
  | 'lastYear'
  | 'lastWeek';

export interface DateRange {
  dateFrom: string;
  dateTo: string;
}

export interface Time {
  id: number;
  date: string;
  timeFrom: string;
  timeTo: string;
}

export interface DateTimesSection {
  date: string;
  times: Time[];
}

export interface Section<T> {
  title: string;
  subtitle?: string;
  data: T[];
}

export interface ListItem extends BaseModel {
  iconName?: IconName;
  leftTitle?: string | null;
  leftSubtitle?: string | null;
  rightTitle?: string | null;
  rightSubtitle?: string | null;
  highlightColor?: keyof ThemeTextColors;
}
