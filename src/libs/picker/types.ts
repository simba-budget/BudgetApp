import { IconName } from '@icons';

export interface PickerOption {
  iconName: IconName;
  title: string;
  isDisabled?: boolean;
  onPress: () => void;
  description?: string;
}

export interface PickerContextValue {
  onClose: () => void;
  onOpen: (options: PickerOption[]) => void;
}
