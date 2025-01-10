import { HeaderBackButtonProps } from '@react-navigation/elements';
import React from 'react';
import { IconButton } from 'src/common/components';

const StackHeaderLeft = ({ onPress }: HeaderBackButtonProps) =>
  onPress ? <IconButton iconName="arrowLeft" onPress={onPress} /> : undefined;

export default StackHeaderLeft;
