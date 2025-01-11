import React, { ReactNode } from 'react';

import KeyboardAvoidingView from './KeyboardAvoidingView';
import ScreenContainer from './ScreenContainer';

export interface FormScreenContainerProps {
  children: ReactNode;
}

const FormScreenContainer = ({ children }: FormScreenContainerProps) => (
  <ScreenContainer>
    <KeyboardAvoidingView>{children}</KeyboardAvoidingView>
  </ScreenContainer>
);

export default FormScreenContainer;
