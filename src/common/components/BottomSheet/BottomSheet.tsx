import { BottomSheetModal, BottomSheetModalProps } from '@gorhom/bottom-sheet';
import { margin } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BottomSheetBackdrop from './BottomSheetBackdrop';

export interface BottomSheetProps
  extends Omit<
    BottomSheetModalProps,
    | 'keyboardBehavior'
    | 'topInset'
    | 'bottomInset'
    | 'onDismiss'
    | 'enablePanDownToClose'
    | 'enableOverDrag'
    | 'backgroundStyle'
    | 'handleIndicatorStyle'
    | 'backdropComponent'
    | 'index'
  > {
  isOpen: boolean;
  onClose: () => void;
}

const BottomSheet = ({ onClose, isOpen, ...rest }: BottomSheetProps) => {
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
      keyboardBlurBehavior="restore"
      topInset={top}
      bottomInset={0}
      onDismiss={onClose}
      ref={ref}
      enablePanDownToClose
      enableOverDrag
      backgroundStyle={styles.container}
      handleIndicatorStyle={styles.handle}
      backdropComponent={BottomSheetBackdrop}
      index={0}
      {...rest}
    />
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
