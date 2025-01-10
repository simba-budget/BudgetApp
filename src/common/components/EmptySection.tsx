import { Button, Text } from '@common/components/index';
import { center } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface EmptySectionProps {
  style?: StyleProp<ViewStyle>;
  description: string;
  ctaTitle: string;
  onPress: () => void;
}

const EmptySection = ({
  style,
  description,
  onPress,
  ctaTitle,
}: EmptySectionProps) => (
  <View style={[styles.container, style]}>
    <Text style={margin('bottom')('m')} color="tertiary" textAlign="center" size="s">
      {description}
    </Text>
    <Button
      iconName="plus"
      size="small"
      color="tertiary"
      onPress={onPress}
      title={ctaTitle}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...center,
    ...padding('full')('xxl'),
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 16,
  },
});

export default EmptySection;
