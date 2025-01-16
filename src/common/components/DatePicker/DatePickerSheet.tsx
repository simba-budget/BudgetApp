import { sizes } from '@styles/lightTheme';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import dayjs from 'dayjs';
import React from 'react';
import { StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import type { SingleChange } from 'react-native-ui-datepicker/src/types';

import BottomSheet from '../BottomSheet';
import Svg from '../Svg';

export interface DatePickerSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onChange?: SingleChange;
  value?: string | null;
}

const DatePickerSheet = ({
  isOpen,
  onClose,
  value,
  onChange,
}: DatePickerSheetProps) => (
  <BottomSheet isOpen={isOpen} onClose={onClose}>
    <DateTimePicker
      height={280}
      calendarTextStyle={styles.calendarTextStyle}
      selectedTextStyle={styles.selectedTextStyle}
      selectedItemColor={colors.text.accent}
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
      onChange={onChange}
    />
  </BottomSheet>
);

const styles = StyleSheet.create({
  calendarTextStyle: {
    ...fonts.urbanist.medium,
    ...fontSizes.s,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  selectedTextStyle: {
    ...fonts.urbanist.bold,
    color: colors.background.accent,
    textTransform: 'capitalize',
  },
  dayContainerStyle: {
    flex: undefined,
    alignSelf: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  todayContainerStyle: {
    borderWidth: 1,
    borderColor: colors.background.accent,
  },
  todayTextStyle: {
    ...fonts.urbanist.bold,
    color: colors.text.primary,
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
    ...fonts.urbanist.bold,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  headerButtonStyle: {
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 0,
    borderWidth: 1,
    backgroundColor: colors.background.primary,
    borderColor: colors.text.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  weekDaysContainerStyle: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: colors.text.primary,
    paddingBottom: 0,
    paddingTop: 0,
    marginBottom: sizes.xs,
  },
  weekDaysTextStyle: {
    ...fonts.urbanist.bold,
    ...fontSizes.xs,
    color: colors.text.primary,
    textTransform: 'uppercase',
  },
});

export default DatePickerSheet;
