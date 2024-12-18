import { IconButton, TextBody, View } from '@common/components';
import { useClientsTranslations } from '@i18n/hooks';
import { IconName } from '@icons';
import { ThemeTextColors } from '@styles/types';
import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface ClientDetailsItemProps {
  style?: StyleProp<ViewStyle>;
  label: string;
  value?: string | number | null;
  iconName: IconName;
  color?: keyof ThemeTextColors;
}

const ClientDetailsItem: FC<ClientDetailsItemProps> = (props) => {
  const { style, iconName, value, label, color } = props;
  const { t } = useClientsTranslations();

  return (
    <View direction="row" align="center" gap="s" style={style}>
      <IconButton
        iconColor={color}
        size="small"
        variant="tertiary"
        isDisabled
        iconName={iconName}
      />
      <View flex1 gap="xxs">
        <TextBody color="white" opacity={0.5} size="xs">
          {label}
        </TextBody>
        <TextBody numberOfLines={1} color={color ?? 'white'} weight="bold">
          {value ?? t('None')}
        </TextBody>
      </View>
    </View>
  );
};

export default ClientDetailsItem;
