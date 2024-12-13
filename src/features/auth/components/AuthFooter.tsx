import { TextBody, View } from '@common/components';
import { useAuthTranslations } from '@i18n/hooks';
import { toPrivacyPolicy, toTermsAndConditions } from '@navigation/actions';
import { RootNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface AuthFooterProps {
  style?: StyleProp<ViewStyle>;
}

const AuthFooter: FC<AuthFooterProps> = (props) => {
  const { style } = props;
  const { t } = useAuthTranslations();
  const navigation = useNavigation<RootNavigation>();

  return (
    <View style={style} direction="row" justify="center" align="center" gap="s">
      <TextBody
        onPress={() => toTermsAndConditions(navigation)}
        textDecorationLine="underline"
        size="xs">
        {t('Terms and conditions')}
      </TextBody>
      <TextBody
        onPress={() => toPrivacyPolicy(navigation)}
        textDecorationLine="underline"
        size="xs">
        {t('Privacy policy')}
      </TextBody>
    </View>
  );
};

export default AuthFooter;
