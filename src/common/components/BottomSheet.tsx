import { BottomSheetModal, BottomSheetModalProps } from '@gorhom/bottom-sheet';
import type { BottomSheetFooterProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetFooter';
import { colors } from '@styles/lightTheme';
import { scale } from '@styles/utils';
import React, { FC, ReactNode, useEffect, useRef } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BottomSheetBackdrop from './BottomSheetBackdrop';

export interface BottomSheetProps {
  style?: StyleProp<ViewStyle>;
  isOpen: boolean;
  onClose: () => void;
  FooterComponent?: FC<BottomSheetFooterProps>;
  children: ReactNode;
  snapPoints: BottomSheetModalProps['snapPoints'];
}

const BottomSheet: FC<BottomSheetProps> = (props) => {
  const { style, onClose, isOpen, snapPoints, children, FooterComponent } = props;

  const ref = useRef<BottomSheetModal>(null);
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    if (!ref.current) return;
    if (isOpen) ref.current.present();
    else ref.current.dismiss();
  }, [isOpen]);

  return (
    <BottomSheetModal
      topInset={top}
      enableOverDrag={false}
      bottomInset={0}
      snapPoints={snapPoints}
      onDismiss={onClose}
      style={style}
      ref={ref}
      enablePanDownToClose
      backgroundStyle={styles.container}
      backdropComponent={BottomSheetBackdrop}
      footerComponent={FooterComponent}
      index={0}>
      {children}
    </BottomSheetModal>
  );
};

export const handleHeight = 24;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopRightRadius: scale(24),
    borderTopLeftRadius: scale(24),
  },
});

export default BottomSheet;
