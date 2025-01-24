import { BottomSheetView } from '@gorhom/bottom-sheet';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { sizes } from '@styles/lightTheme';
import React, { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BottomSheet from './BottomSheet';

export interface BottomSheetScreenContainerProps {
  children: ReactNode;
}

const BottomSheetScreenContainer = ({
  children,
}: BottomSheetScreenContainerProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { bottom } = useSafeAreaInsets();

  return (
    <BottomSheet isOpen onClose={navigation.goBack}>
      <BottomSheetView style={{ paddingBottom: bottom + sizes.m }}>
        {children}
      </BottomSheetView>
    </BottomSheet>
  );
};

export default BottomSheetScreenContainer;
