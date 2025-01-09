import { SheetScreenContainer } from '@common/v2/components';
import { Success } from '@common/v2/containers';
import { IconName } from '@icons';
import { StaticScreenProps } from '@react-navigation/native';
import React from 'react';

export type SuccessScreenProps = StaticScreenProps<{
  title: string;
  description: string;
  iconName: IconName;
  ctaTitle: string;
  onCtaPress: () => void;
}>;

const SuccessScreen = ({ route }: SuccessScreenProps) => (
  <SheetScreenContainer>
    <Success {...route.params} />
  </SheetScreenContainer>
);

export default SuccessScreen;
