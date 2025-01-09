import { useCommonTranslations } from '@i18n/hooks';
import { IconName } from '@icons';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { center } from '@styles/common';
import { gap, padding } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';

import { Button, IconButton, Text } from '../components';

export interface SuccessProps {
  title: string;
  description: string;
  iconName: IconName;
  ctaTitle: string;
  onCtaPress: () => void;
}

const Success = ({
  description,
  title,
  ctaTitle,
  onCtaPress,
  iconName,
}: SuccessProps) => {
  const { t } = useCommonTranslations();
  const navigation = useNavigation<RootNavigation>();

  return (
    <View style={[padding('horizontal')('l'), padding('top')('m'), gap('row')('l')]}>
      <View style={[gap('row')('xs'), center, padding('horizontal')('m')]}>
        <IconButton
          color="primary"
          size={56}
          iconSize={28}
          iconName={iconName}
          isDisabled
        />
        <Text color="primary" weight="semiBold" textAlign="center" size="l">
          {title}
        </Text>
        <Text weight="medium" textAlign="center" color="tertiary" size="s">
          {description}
        </Text>
      </View>
      <View style={gap('row')('xs')}>
        <Button
          onPress={onCtaPress}
          size="medium"
          color="primary"
          title={ctaTitle}
        />
        <Button
          onPress={navigation.goBack}
          size="medium"
          color="tertiary"
          title={t('Close')}
        />
      </View>
    </View>
  );
};

export default Success;
