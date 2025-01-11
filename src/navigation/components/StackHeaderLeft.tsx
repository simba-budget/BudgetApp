import { Svg, Text } from '@common/components';
import { HeaderBackButtonProps } from '@react-navigation/elements';
import { row } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const StackHeaderLeft = ({ onPress }: HeaderBackButtonProps) =>
  onPress ? (
    <TouchableOpacity
      style={[
        row,
        padding('vertical')('xxs'),
        margin('top')('xxs'),
        gap('column')('xs'),
      ]}
      onPress={onPress}>
      <Svg size={24} color={colors.text.primary} name="chevronLeft" />
      <Text weight="medium" size="m" color="primary">
        Back
      </Text>
    </TouchableOpacity>
  ) : undefined;

export default StackHeaderLeft;
