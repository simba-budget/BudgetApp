import { Divider, IconButton, TextBody, TransTextBody, View } from '@common/components';
import { AuthNavigation } from '@navigation/navigators/auth';
import { RegistrationRoute, SendOtpRoute } from '@navigation/navigators/auth/types';
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

export interface AuthFooterProps {
  style?: StyleProp<ViewStyle>;
  label: string;
  route: RegistrationRoute | SendOtpRoute;
  dividerText: string;
}

const SocialLogins: FC<AuthFooterProps> = (props) => {
  const { style, label, dividerText, route } = props;
  const navigation = useNavigation<AuthNavigation>();

  return (
    <View gap="xl" style={style}>
      <View align="center" justify="center" direction="row">
        <Divider variant="primary" style={styles.divider} />
        <View bgColor="white" ph="xs">
          <TextBody textAlign="center" size="xs" color="secondary">
            {dividerText}
          </TextBody>
        </View>
      </View>
      <View gap="s" direction="row" align="center" justify="center">
        <IconButton variant="tertiary" size="medium" iconName="apple" />
        <IconButton variant="tertiary" size="medium" iconName="google" />
        <IconButton variant="tertiary" size="medium" iconName="facebook" />
      </View>
      <TransTextBody
        onHighlightedPress={() => navigation.navigate(route)}
        textAlign="center"
        size="xs"
        ns="auth"
        i18nKey={label}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    top: 8,
    right: 0,
    left: 0,
    position: 'absolute',
  },
});

export default SocialLogins;
