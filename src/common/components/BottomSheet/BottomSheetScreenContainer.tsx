import { useSafeBottomInset } from '@common/hooks';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';

import BottomSheet from './BottomSheet';

export interface BottomSheetScreenContainerProps {
  children: ReactNode;
}

const BottomSheetScreenContainer = ({
  children,
}: BottomSheetScreenContainerProps) => {
  const navigation = useNavigation<RootNavigation>();
  const paddingBottom = useSafeBottomInset();

  return (
    <BottomSheet isOpen onClose={navigation.goBack}>
      <BottomSheetView style={{ paddingBottom }}>{children}</BottomSheetView>
    </BottomSheet>
  );
};

export default BottomSheetScreenContainer;
