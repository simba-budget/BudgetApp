import { IconName } from '@icons';

export interface SelectOption<T> {
  key: string;
  iconName: IconName;
  label: string;
  isDisabled?: boolean;
  value: T;
}
