import { flex1 } from '@styles/common';
import { padding, sizes } from '@styles/lightTheme';
import { Colors } from '@styles/v2/types';
import { colors } from '@styles/v2/urbanistTheme';
import React, { ReactNode } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface BottomSheet2Props {
  children: ReactNode;
  onClose: () => void;
  backgroundColor?: keyof Colors['background'];
}

const BottomSheet2 = ({
  onClose,
  children,
  backgroundColor = 'primary',
}: BottomSheet2Props) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={flex1}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={flex1} />
      </TouchableWithoutFeedback>
      <View
        style={[
          styles.container,
          {
            paddingBottom: bottom + sizes.m,
            backgroundColor: colors.background[backgroundColor],
          },
        ]}>
        <View style={styles.handle} />
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('top')('s'),
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  handle: {
    alignSelf: 'center',
    width: 32,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.text.tertiary,
  },
});

export default BottomSheet2;
