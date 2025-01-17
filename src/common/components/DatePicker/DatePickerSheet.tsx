import { useSafeBottomInset } from '@common/hooks';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { padding, sizes } from '@styles/lightTheme';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import dayjs from 'dayjs';
import React from 'react';
import { StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import type { SingleChange } from 'react-native-ui-datepicker/src/types';

import { BottomSheet } from '../BottomSheet';
import Svg from '../Svg';

export interface DatePickerSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onChange: SingleChange;
  value?: string | null;
}

const DatePickerSheet = ({
  isOpen,
  onClose,
  value,
  onChange,
}: DatePickerSheetProps) => {
  const paddingBottom = useSafeBottomInset();

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <BottomSheetView style={[padding('horizontal')('m'), { paddingBottom }]}>
        <DateTimePicker
          height={340}
          calendarTextStyle={styles.calendarTextStyle}
          selectedTextStyle={styles.selectedTextStyle}
          selectedItemColor={colors.background.accent}
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
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  calendarTextStyle: {
    ...fonts.urbanist.medium,
    ...fontSizes.s,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  selectedTextStyle: {
    ...fonts.urbanist.semiBold,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
  dayContainerStyle: {
    alignSelf: 'center',
    width: 42,
    height: 42,
    minHeight: 42,
    minWidth: 42,
    maxHeight: 42,
    maxWidth: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  todayContainerStyle: {
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
  todayTextStyle: {
    ...fonts.urbanist.semiBold,
    color: colors.background.accent,
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
    ...fonts.urbanist.semiBold,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  headerButtonStyle: {
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 0,
    borderWidth: 1,
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.primary,
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  weekDaysContainerStyle: {
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.primary,
    paddingBottom: 0,
    paddingTop: 0,
    marginBottom: sizes.xs,
  },
  weekDaysTextStyle: {
    ...fonts.urbanist.semiBold,
    ...fontSizes.xs,
    color: colors.text.tertiary,
  },
});

export default DatePickerSheet;
