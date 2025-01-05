import {
  BottomSheetBackdropProps,
  BottomSheetBackdrop as RNBottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleSheet } from 'react-native';

const BottomSheetBackdrop = ({ style, ...rest }: BottomSheetBackdropProps) => (
  <RNBottomSheetBackdrop
    {...rest}
    style={[styles.container, style]}
    opacity={0.4}
    disappearsOnIndex={-1}
    pressBehavior="close"
  />
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.common.black,
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default BottomSheetBackdrop;
