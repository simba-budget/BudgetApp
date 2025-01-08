import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '@styles/v2/types';
import React, { ReactNode } from 'react';

import BottomSheet2 from './BottomSheet2';

export interface SheetScreenContainerProps {
  children: ReactNode;
  backgroundColor?: keyof Colors['background'];
}

const SheetScreenContainer = ({
  children,
  backgroundColor,
}: SheetScreenContainerProps) => {
  const navigation = useNavigation<RootNavigation>();

  return (
    <BottomSheet2 backgroundColor={backgroundColor} onClose={navigation.goBack}>
      {children}
    </BottomSheet2>
  );
};

export default SheetScreenContainer;
