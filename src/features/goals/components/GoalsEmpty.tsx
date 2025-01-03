import { Button, Text } from '@common/v2/components';
import { useGoalsTranslations } from '@i18n/hooks';
import { center } from '@styles/common';
import { margin, padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

export interface GoalsEmptyProps {
  style?: StyleProp<ViewStyle>;
  onAddPress: () => void;
}

const GoalsEmpty = ({ style, onAddPress }: GoalsEmptyProps) => {
  const { t } = useGoalsTranslations();

  return (
    <View style={[styles.container, style]}>
      <Text
        style={margin('bottom')('m')}
        color="tertiary"
        textAlign="center"
        size="s">
        {t(
          'No goals set yet. Begin saving today and secure your financial future now!',
        )}
      </Text>
      <Button
        size="small"
        color="secondary"
        onPress={onAddPress}
        title={t('Create New Goal')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...center,
    ...padding('full')('xxl'),
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 30,
  },
});

export default GoalsEmpty;
