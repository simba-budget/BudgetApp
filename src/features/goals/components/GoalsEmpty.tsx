import { EmptySection } from '@common/components';
import { useGoalsTranslations } from '@i18n/hooks';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface GoalsEmptyProps {
  style?: StyleProp<ViewStyle>;
  onAddPress: () => void;
}

const GoalsEmpty = ({ style, onAddPress }: GoalsEmptyProps) => {
  const { t } = useGoalsTranslations();

  return (
    <EmptySection
      style={style}
      description={t(
        'No goals set yet. Begin saving today and secure your financial future now!',
      )}
      ctaTitle={t('Create New Goal')}
      onPress={onAddPress}
    />
  );
};

export default GoalsEmpty;
