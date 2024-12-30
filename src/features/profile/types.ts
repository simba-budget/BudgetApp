import { IconName } from '@icons';

export interface ProfileItemProps {
  title: string;
  subtitle?: string;
  iconName: IconName;
  hideArrow?: boolean;
  onPress: () => void;
}

export interface ProfileSectionProps {
  title: string;
  items: ProfileItemProps[];
}
