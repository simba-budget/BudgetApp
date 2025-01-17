import { useCommonTranslations } from '@i18n/hooks';
import { formatDate, formatFormDate } from '@utils/date';
import React, { useCallback, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { DateType } from 'react-native-ui-datepicker/src/types';

import Text from '../Text';
import ValueContainer from '../ValueContainer';

import DatePickerSheet from './DatePickerSheet';

export interface DatePickerProps {
  style?: StyleProp<ViewStyle>;
  value?: string | null;
  onChange: (value?: string | null) => void;
  isDisabled?: boolean;
  label: string;
}

const DatePicker = ({
  style,
  value,
  onChange,
  isDisabled = false,
  label,
}: DatePickerProps) => {
  const { t } = useCommonTranslations();
  const [isOpen, setIsOpen] = useState(false);

  const handleOnChange = useCallback(
    ({ date }: { date: DateType }) => {
      onChange(formatFormDate(date));
      setIsOpen(false);
    },
    [onChange],
  );

  return (
    <View style={style}>
      <ValueContainer
        isDisabled={isDisabled}
        iconName="calendar"
        label={label}
        onPress={() => setIsOpen(true)}>
        <Text weight="semiBold" size="s" color={value ? 'primary' : 'tertiary'}>
          {value ? formatDate(value) : t('Not set')}
        </Text>
      </ValueContainer>
      <DatePickerSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        value={value}
        onChange={handleOnChange}
      />
    </View>
  );
};

export default DatePicker;
