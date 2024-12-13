import { IconButton } from '@common/components';
import { HeaderBackButtonProps } from '@react-navigation/elements';
import React from 'react';

const StackHeaderLeft = ({ onPress }: HeaderBackButtonProps) => (
  <IconButton size="small" variant="primary" iconName="arrowLeft" onPress={onPress} />
);

export default StackHeaderLeft;
