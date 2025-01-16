import { useCommonTranslations } from '@i18n/hooks';
import { padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useSafeBottomInset } from '../../hooks';
import Button from '../Button';

export interface MultiSelectFooterProps {
  onPress: () => void;
}

const MultiSelectFooter = ({ onPress }: MultiSelectFooterProps) => {
  const { t } = useCommonTranslations();
  const paddingBottom = useSafeBottomInset();

  return (
    <View style={[styles.container, { paddingBottom }]}>
      <Button size="medium" color="primary" onPress={onPress} title={t('Save')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('horizontal')('m'),
    ...padding('top')('m'),
    backgroundColor: colors.background.secondary,
    borderColor: colors.border.primary,
    borderTopWidth: 1,
  },
});

export default MultiSelectFooter;
