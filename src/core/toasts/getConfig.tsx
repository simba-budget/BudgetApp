import { Svg, View } from '@common/components';
import { alignCenter } from '@styles/common';
import { colors, fonts, fontSizes, gap, padding, sizes } from '@styles/lightTheme';
import React from 'react';
import { StyleSheet } from 'react-native';
import { BaseToast } from 'react-native-toast-message';
import { ToastConfig } from 'react-native-toast-message/lib/src/types';

const renderSuccessIcon = () => (
  <View
    style={styles.successIcon}
    align="center"
    justify="center"
    bgColor="success500">
    <Svg size={14} color="white" name="check" />
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
    ...gap('column')('s'),
    ...padding('horizontal')('m'),
    ...alignCenter,
    backgroundColor: colors.black500,
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
    ...fonts.spaceGrotesk.medium,
    color: colors.white,
    marginBottom: 0,
  },
  successIcon: {
    borderWidth: 1,
    height: 20,
    width: 20,
    borderRadius: 10,
    borderColor: colors.white,
  },
  description: {
    display: 'none',
  },
});

export default getConfig;
