import { Button, Text } from '@common/components';
import { useAuthTranslations } from '@i18n/hooks';
import {
  registrationRoute,
  RootNavigation,
  sendOtpRoute,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { center, flex1, justifyEnd, rowCenter } from '@styles/common';
import { gap, margin, padding, sizes } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Welcome = () => {
  const navigation = useNavigation<RootNavigation>();
  const { bottom } = useSafeAreaInsets();
  const { t } = useAuthTranslations();

  return (
    <View style={styles.container}>
      <View style={[styles.footer, { paddingBottom: bottom + sizes.m }]}>
        <View
          style={[
            padding('horizontal')('l'),
            gap('row')('s'),
            margin('bottom')('xl'),
          ]}>
          <Text size="xl" color="primary" weight="bold" textAlign="center">
            {t('The Budget App That Makes You')}
          </Text>
          <Text size="s" color="tertiary" textAlign="center">
            {t(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
            )}
          </Text>
        </View>
        <Button
          style={margin('bottom')('s')}
          size="medium"
          color="primary"
          onPress={() => navigation.replace(registrationRoute)}
          title={t('Let’s Get Started')}
        />
        <View style={[rowCenter, center, gap('column')('xxs')]}>
          <Text weight="medium" size="s" color="tertiary" textAlign="center">
            {t('Already have an account?')}
          </Text>
          <TouchableOpacity onPress={() => navigation.replace(sendOtpRoute)}>
            <Text weight="semiBold" size="s" color="primary" textAlign="center">
              {t('Sign In')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...flex1,
    ...justifyEnd,
    backgroundColor: colors.background.primary,
  },
  footer: {
    ...padding('horizontal')('m'),
    ...padding('top')('xl'),
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
  },
});

export default Welcome;
