import { Svg, Text } from '@common/components';
import { HeaderBackButtonProps } from '@react-navigation/elements';
import { rowCenter } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const StackHeaderLeft = ({ onPress }: HeaderBackButtonProps) =>
  onPress ? (
    <TouchableOpacity
      style={[
        rowCenter,
        padding('vertical')('xxs'),
        margin('top')('xxxs'),
        gap('column')('xxs'),
      ]}
      onPress={onPress}>
      <Svg size={20} color={colors.text.primary} name="chevronLeft" />
      <Text weight="medium" size="s" color="primary">
        Back
      </Text>
    </TouchableOpacity>
  ) : undefined;

export default StackHeaderLeft;
