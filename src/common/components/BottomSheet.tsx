import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { margin } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React, { ReactNode, useEffect, useRef } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BottomSheetBackdrop from './BottomSheetBackdrop';

export interface BottomSheetProps {
  style?: StyleProp<ViewStyle>;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BottomSheet = ({ style, onClose, isOpen, children }: BottomSheetProps) => {
  const { top } = useSafeAreaInsets();
  const ref = useRef<BottomSheetModal>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (isOpen) ref.current.present();
    else ref.current.close();
  }, [isOpen]);

  return (
    <BottomSheetModal
      keyboardBehavior="interactive"
      enableDynamicSizing={false}
      snapPoints={['95%']}
      topInset={top}
      bottomInset={0}
      onDismiss={onClose}
      style={style}
      ref={ref}
      enablePanDownToClose
      enableOverDrag={false}
      backgroundStyle={styles.container}
      handleIndicatorStyle={styles.handle}
      backdropComponent={BottomSheetBackdrop}
      index={0}>
      {children}
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: colors.background.primary,
  },
  handle: {
    ...margin('bottom')('xxs'),
    alignSelf: 'center',
    width: 32,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.text.tertiary,
  },
});

export default BottomSheet;
