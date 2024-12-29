import welcomeImage from '@assets/images/welcome/welcome.jpg';
import { Button, TextBody, TransTextBody, TransTextHeading, View } from '@common/components';
import { useWelcomeTranslations } from '@i18n/hooks';
import { AuthNavigation, toRegistration, toSendOtp } from '@navigation/navigators/auth';
import { useNavigation } from '@react-navigation/native';
import { flex1, justifyEnd } from '@styles/common';
import { colors, sizes } from '@styles/lightTheme';
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import DropShadow from 'react-native-drop-shadow';

const Welcome = () => {
  const navigation = useNavigation<AuthNavigation>();
  const { t } = useWelcomeTranslations();

  return (
    <ImageBackground style={[flex1, justifyEnd]} source={welcomeImage}>
      <DropShadow style={styles.footerShadow}>
        <View bgColor="white" style={styles.footer}>
          <View ph="l" pv="xl" gap="xl" isBottomSafe>
            <View gap="xs">
              <TransTextHeading
                color="primary"
                weight="semiBold"
                textAlign="center"
                size="xl"
                ns="welcome"
                i18nKey="The Budget App That Makes You Look Your Best"
              />
              <TextBody size="s" color="secondary" textAlign="center">
                {t('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod')}
              </TextBody>
            </View>
            <View gap="s">
              <Button
                size="medium"
                variant="primary"
                onPress={() => toRegistration(navigation)}
                title={t('Let’s Get Started')}
              />
              <TransTextBody
                onHighlightedPress={() => toSendOtp(navigation)}
                textAlign="center"
                size="xs"
                ns="welcome"
                i18nKey="Already have an account? Sign In"
              />
            </View>
          </View>
        </View>
      </DropShadow>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  footerShadow: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 16,
    shadowOpacity: 0.4,
  },
  footer: {
    borderTopLeftRadius: sizes.l,
    borderTopRightRadius: sizes.l,
  },
});

export default Welcome;
