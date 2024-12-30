import { IconButton } from '@common/v2/components';
import { HeaderBackButtonProps } from '@react-navigation/elements';
import React from 'react';

const StackHeaderLeft = ({ onPress }: HeaderBackButtonProps) =>
  onPress ? <IconButton iconName="arrowLeft" onPress={onPress} /> : undefined;

export default StackHeaderLeft;
