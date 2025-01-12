import { flex1 } from '@styles/common';
import { padding, sizes } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React, { ReactNode, useMemo } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useSafeBottomInset } from '../hooks';

export interface BottomSheet2Props {
  children: ReactNode;
  onClose: () => void;
  isBottomSafe?: boolean;
  minHeight?: ViewStyle['minHeight'];
}

const BottomSheet2 = ({
  onClose,
  children,
  minHeight,
  isBottomSafe = false,
}: BottomSheet2Props) => {
  const { top } = useSafeAreaInsets();
  const paddingBottom = useSafeBottomInset();
  const { height } = useWindowDimensions();
  const maxHeight = useMemo<number>(() => height - top - sizes.xxl, [height, top]);

  return (
    <View style={flex1}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={flex1} />
      </TouchableWithoutFeedback>
      <View
        style={[
          styles.container,
          { maxHeight, minHeight },
          isBottomSafe && { paddingBottom },
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
