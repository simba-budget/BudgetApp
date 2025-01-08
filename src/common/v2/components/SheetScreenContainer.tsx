import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';

import BottomSheet2 from './BottomSheet2';

export interface SheetScreenContainerProps {
  children: ReactNode;
}

const SheetScreenContainer = ({ children }: SheetScreenContainerProps) => {
  const navigation = useNavigation<RootNavigation>();
  return <BottomSheet2 onClose={navigation.goBack}>{children}</BottomSheet2>;
};

export default SheetScreenContainer;
