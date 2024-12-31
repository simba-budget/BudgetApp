import Svg from '@common/components/Svg';
import { IconName } from '@icons';
import { Colors, ThemeTextColors } from '@styles/types';
import React, { FC, useMemo } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import TextBody from './TextBody';
import View from './View';

export type MessageVariant = 'warning';

export interface MessageProps {
  style?: StyleProp<ViewStyle>;
  variant: MessageVariant;
  message: string;
}

const Message: FC<MessageProps> = (props) => {
  const { style, variant, message } = props;

  const textColor = useMemo<keyof ThemeTextColors>(
    () => textColorMap[variant],
    [variant],
  );

  return (
    <View
      ph="m"
      pv="s"
      direction="row"
      align="center"
      gap="s"
      bgColor={backgroundColorMap[variant]}
      style={[styles.container, style]}>
      <Svg size={24} name={iconMap[variant]} color={textColor} />
      <View flex1>
        <TextBody size="xs" weight="medium" color={textColor}>
          {message}
        </TextBody>
      </View>
    </View>
  );
};

const backgroundColorMap: Record<MessageVariant, keyof Colors> = {
  warning: 'warning50',
};

const textColorMap: Record<MessageVariant, keyof ThemeTextColors> = {
  warning: 'warning',
};

const iconMap: Record<MessageVariant, IconName> = {
  warning: 'warning',
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
  },
});

export default Message;
