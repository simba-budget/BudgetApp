import { IconName } from '@icons';

export interface QuickActionItem {
  title: string;
  iconName: IconName;
  onPress: () => void;
}
