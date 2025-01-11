import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';

import BottomSheet2 from './BottomSheet2';
import KeyboardAvoidingView from './KeyboardAvoidingView';

export interface SheetScreenContainerProps {
  children: ReactNode;
}

const SheetScreenContainer = ({ children }: SheetScreenContainerProps) => {
  const navigation = useNavigation<RootNavigation>();

  return (
    <KeyboardAvoidingView>
      <BottomSheet2 onClose={navigation.goBack}>{children}</BottomSheet2>
    </KeyboardAvoidingView>
  );
};

export default SheetScreenContainer;
