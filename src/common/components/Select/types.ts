import { IconName } from '@icons';

export interface SelectOption<T> {
  key: string;
  iconName?: IconName;
  avatarUrl?: string;
  label: string;
  isDisabled?: boolean;
  value: T;
}
