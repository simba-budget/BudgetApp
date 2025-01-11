import { flex1 } from '@styles/common';
import { padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React, { ReactNode } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { useSafeBottomInset } from '../hooks';

export interface BottomSheet2Props {
  children: ReactNode;
  onClose: () => void;
}

const BottomSheet2 = ({ onClose, children }: BottomSheet2Props) => {
  const paddingBottom = useSafeBottomInset();

  return (
    <View style={flex1}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={flex1} />
      </TouchableWithoutFeedback>
      <View style={[styles.container, { paddingBottom }]}>
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
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: colors.background.primary,
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
