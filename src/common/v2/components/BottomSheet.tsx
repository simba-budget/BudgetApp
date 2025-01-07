import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { colors } from '@styles/v2/urbanistTheme';
import React, { ReactNode, useEffect, useMemo, useRef } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BottomSheetBackdrop from './BottomSheetBackdrop';

export interface BottomSheetProps {
  style?: StyleProp<ViewStyle>;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  isSafeBottomArea?: boolean;
  isHandleHidden?: boolean;
}

const BottomSheet = ({
  style,
  onClose,
  isOpen,
  children,
  isSafeBottomArea = false,
  isHandleHidden = false,
}: BottomSheetProps) => {
  const { bottom } = useSafeAreaInsets();
  const ref = useRef<BottomSheetModal>(null);
  const { top } = useSafeAreaInsets();

  const paddingBottom = useMemo<number>(
    () => (isSafeBottomArea ? bottom : 0),
    [isSafeBottomArea, bottom],
  );

  useEffect(() => {
    if (!ref.current) return;
    if (isOpen) ref.current.present();
    else ref.current.close();
  }, [isOpen]);

  return (
    <BottomSheetModal
      topInset={top}
      bottomInset={0}
      onDismiss={onClose}
      style={style}
      ref={ref}
      enablePanDownToClose
      enableOverDrag={false}
      backgroundStyle={styles.container}
      handleIndicatorStyle={[styles.handle, isHandleHidden && styles.hiddenHandle]}
      backdropComponent={BottomSheetBackdrop}
      index={0}>
      <BottomSheetView>
        <View style={{ paddingBottom }}>{children}</View>
      </BottomSheetView>
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
  handle: {
    backgroundColor: colors.text.tertiary,
  },
  hiddenHandle: {
    display: 'none',
  },
});

export default BottomSheet;
