import { Svg } from '@common/components';
import { alignCenter, center } from '@styles/common';
import { gap, padding, sizes } from '@styles/lightTheme';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseToast } from 'react-native-toast-message';
import { ToastConfig } from 'react-native-toast-message/lib/src/types';

const renderSuccessIcon = () => (
  <View style={styles.successIcon}>
    <Svg size={14} color={colors.text.secondary} name="check" />
  </View>
);

const getConfig = (width: number): ToastConfig => ({
  success: (props) => (
    <BaseToast
      {...props}
      style={[{ width: width - sizes.xxl * 2 }, styles.container]}
      contentContainerStyle={styles.content}
      text1NumberOfLines={1}
      text1Style={styles.label}
      text2Style={styles.description}
      renderLeadingIcon={renderSuccessIcon}
    />
  ),
});

const styles = StyleSheet.create({
  container: {
    ...gap('column')('xs'),
    ...padding('horizontal')('m'),
    ...alignCenter,
    backgroundColor: colors.background.primary,
    borderColor: colors.border.primary,
    borderWidth: 1,
    height: 40,
    borderRadius: 20,
    elevation: 0,
    shadowRadius: 0,
    shadowOpacity: 0,
    borderLeftWidth: 0,
  },
  content: {
    paddingHorizontal: 0,
  },
  label: {
    ...fontSizes.xs,
    ...fonts.urbanist.medium,
    color: colors.text.primary,
    marginBottom: 0,
  },
  successIcon: {
    ...center,
    borderWidth: 1,
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: colors.border.accent,
    backgroundColor: colors.background.accent,
  },
  description: {
    display: 'none',
  },
});

export default getConfig;
