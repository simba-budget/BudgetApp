import { useCommonTranslations } from '@i18n/hooks';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';

import { useSafeBottomInset } from '../../hooks';
import Button from '../Button';

export interface MultiSelectFooterProps {
  onPress: () => void;
}

const MultiSelectFooter = ({ onPress }: MultiSelectFooterProps) => {
  const { t } = useCommonTranslations();
  const paddingBottom = useSafeBottomInset();

  return (
    <View
      style={[padding('horizontal')('m'), padding('top')('xs'), { paddingBottom }]}>
      <Button size="medium" color="primary" onPress={onPress} title={t('Save')} />
    </View>
  );
};

export default MultiSelectFooter;
