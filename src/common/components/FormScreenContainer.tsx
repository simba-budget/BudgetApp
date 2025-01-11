import { flex1 } from '@styles/common';
import { colors } from '@styles/v2/urbanistTheme';
import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { useSafeBottomStyle } from '../hooks';

export interface FormScreenContainerProps {
  children: ReactNode;
  isTabsScreen?: boolean;
  additionalPadding?: number;
}

const FormScreenContainer = ({
  children,
  isTabsScreen,
  additionalPadding,
}: FormScreenContainerProps) => {
  const containerStyle = useSafeBottomStyle({ isTabsScreen, additionalPadding });

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...flex1,
    backgroundColor: colors.background.primary,
  },
});

export default FormScreenContainer;
