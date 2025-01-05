import { BottomSheetModal } from '@gorhom/bottom-sheet';
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
  const ref = useRef<BottomSheetModal>(null);
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    if (!ref.current) return;
    if (isOpen) ref.current.present();
  }, [isOpen]);

  return (
    <BottomSheetModal
      topInset={top}
      bottomInset={0}
      onDismiss={onClose}
      style={style}
      ref={ref}
      enablePanDownToClose
      backgroundStyle={styles.container}
      handleIndicatorStyle={styles.indicator}
      backdropComponent={BottomSheetBackdrop}
      index={0}>
      {children}
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  indicator: {
    backgroundColor: colors.text.tertiary,
  },
});

export default BottomSheet;
