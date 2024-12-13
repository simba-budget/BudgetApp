import {
  BottomSheetBackdropProps,
  BottomSheetBackdrop as RNBottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { colors } from '@styles/lightTheme';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

const BottomSheetBackdrop: FC<BottomSheetBackdropProps> = (props) => {
  const { style, ...rest } = props;

  return (
    <RNBottomSheetBackdrop
      {...rest}
      style={[styles.container, style]}
      opacity={0.4}
      disappearsOnIndex={-1}
      pressBehavior="close"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black500,
  },
});

export default BottomSheetBackdrop;
