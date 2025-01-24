import { IconName } from '@icons';
import { Colors } from '@styles/v2/types';

export interface ProfileItemProps {
  title: string;
  subtitle?: string;
  iconName: IconName;
  hideArrow?: boolean;
  onPress: () => void;
  color?: keyof Colors['text'];
}

export interface ProfileSectionProps {
  title: string;
  items: ProfileItemProps[];
}
