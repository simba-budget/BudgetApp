import { colors, fonts, fontSizes, sizes } from '@styles/lightTheme';
import { scale } from '@styles/utils';
import { formatDate } from '@utils/date';
import dayjs from 'dayjs';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import DateTimePicker, { DateType } from 'react-native-ui-datepicker';

import BottomSheet from './BottomSheet';
import Svg from './Svg';
import ValueContainer, { ValueContainerProps } from './ValueContainer';
import View from './View';

export interface DatePickerProps
  extends Omit<
    ValueContainerProps,
    'label' | 'isFocused' | 'onPress' | 'onClearPress' | 'iconName'
  > {
  onChange?: (value?: string | null) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  value?: string | null;
}

const DatePicker: FC<DatePickerProps> = (props) => {
  const { onChange, value, onFocus, onBlur, ...rest } = props;
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { bottom } = useSafeAreaInsets();
  const snapPoints = useMemo<number[]>(() => [scale(390) + bottom], [bottom]);

  const handleOnBlur = useCallback(() => {
    setIsFocused(false);
    onBlur?.();
  }, [onBlur]);

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
    onFocus?.();
  }, [onFocus]);

  const handleOnCLear = useCallback(() => {
    onChange?.(null);
    handleOnBlur();
  }, [onChange, handleOnBlur]);

  const handleOnChange = useCallback(
    ({ date }: { date: DateType }) => {
      onChange?.(formatDate(date));
      handleOnBlur();
    },
    [onChange, handleOnBlur],
  );

  return (
    <>
      <ValueContainer
        iconName="calendar"
        label={formatDate(value)}
        isFocused={isFocused}
        onPress={handleOnFocus}
        onClearPress={handleOnCLear}
        {...rest}
      />
      <BottomSheet snapPoints={snapPoints} onClose={handleOnBlur} isOpen={isFocused}>
        <View bgColor="white" pb="l" ph="l">
          <DateTimePicker
            height={scale(280)}
            calendarTextStyle={styles.calendarTextStyle}
            selectedTextStyle={styles.selectedTextStyle}
            selectedItemColor={colors.primary300}
            dayContainerStyle={styles.dayContainerStyle}
            todayContainerStyle={styles.todayContainerStyle}
            todayTextStyle={styles.todayTextStyle}
            headerContainerStyle={styles.headerContainerStyle}
            headerTextContainerStyle={styles.headerTextContainerStyle}
            headerTextStyle={styles.headerTextStyle}
            headerButtonStyle={styles.headerButtonStyle}
            buttonNextIcon={<Svg name="arrowRight" size={18} />}
            buttonPrevIcon={<Svg name="arrowLeft" size={18} />}
            weekDaysContainerStyle={styles.weekDaysContainerStyle}
            weekDaysTextStyle={styles.weekDaysTextStyle}
            displayFullDays
            firstDayOfWeek={1}
            headerButtonsPosition="right"
            locale={dayjs.locale()}
            mode="single"
            date={value ?? undefined}
            onChange={handleOnChange}
          />
        </View>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  calendarTextStyle: {
    ...fonts.spaceGrotesk.medium,
    ...fontSizes.s,
    color: colors.black500,
    textTransform: 'capitalize',
  },
  selectedTextStyle: {
    ...fonts.spaceGrotesk.bold,
    color: colors.white,
    textTransform: 'capitalize',
  },
  dayContainerStyle: {
    flex: undefined,
    alignSelf: 'center',
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    borderWidth: 1,
    borderColor: colors.white,
  },
  todayContainerStyle: {
    borderWidth: 1,
    borderColor: colors.white,
  },
  todayTextStyle: {
    ...fonts.spaceGrotesk.bold,
    color: colors.primary300,
  },
  headerContainerStyle: {
    marginBottom: 0,
  },
  headerTextContainerStyle: {
    borderRadius: 0,
    paddingHorizontal: 1,
    paddingVertical: 0,
  },
  headerTextStyle: {
    ...fontSizes.m,
    ...fonts.spaceGrotesk.bold,
    color: colors.black500,
    textTransform: 'capitalize',
  },
  headerButtonStyle: {
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 0,
    borderWidth: 1,
    backgroundColor: colors.lightGrey500,
    borderColor: colors.lightGrey500,
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
  },
  weekDaysContainerStyle: {
    height: scale(40),
    borderBottomWidth: 1,
    borderBottomColor: colors.grey50,
    paddingBottom: 0,
    paddingTop: 0,
    marginBottom: sizes.xs,
  },
  weekDaysTextStyle: {
    ...fonts.spaceGrotesk.bold,
    ...fontSizes.xs,
    color: colors.black500,
    textTransform: 'uppercase',
  },
});

export default DatePicker;
